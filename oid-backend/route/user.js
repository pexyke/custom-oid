const router = require("express").Router();
const User = require("../model/user");
const Client = require("../model/client");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  if (!req.body?.username || !req.body.password) return res.sendStatus(400);

  const users = await User.find({ username: req.body.username });
  if (users.length) return res.sendStatus(409);

  await User.create({
    username: req.body.username,
    password: req.body.password     // hash password !!!!
  });

  res.sendStatus(200);
});

router.post("/login", async (req, res) => {
  console.log(req.body)
  if (!req.body?.username || !req.body.password || !req.body.client || !req.body.redirectUri) return res.sendStatus(400);

  // hash!!!
  const users = await User.find({ username: req.body.username, password: req.body.password });

  if (!users.length) return res.sendStatus(401);

  const client = await Client.findOne({ client_id: req.body.client });

  if (!client) return res.sendStatus(401);
  if (client.redirect_uri !== req.body.redirectUri) return res.sendStatus(401);

  const code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  client.users.push({
    userId: users[0]._id,
    code
  })

  await client.save();

  res.json({ code });
});

router.post("/token", async (req, res) => {
  if (!req.body.code || !req.body.client_id || !req.body.client_secret) return res.sendStatus(400);

  const client = await Client.findOne({ client_id: req.body.client_id, client_secret: req.body.client_secret });

  if (!client) return res.sendStatus(401);

  const user = client.users.find(u => u.code === req.body.code);

  if (!user) return res.sendStatus(401);

  const token = jwt.sign({ sub: user.userId }, "shhhh", { expiresIn: "1h" });

  res.json({ id_token: token });
  
});

module.exports = router;

/*
google:
https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=651816047225-1us03r4vchvce7h51t0c49f4u0ip7ubm.apps.googleusercontent.com&redirect_uri=http://localhost:3000/callback&scope=openid%20email&prompt=select_account

github:
https://github.com/login/oauth/authorize?response_type=code&client_id=a6b3d8e1c2c6c193dac2&redirect_uri=http://localhost:3000/callback/github&scope=user%20email&prompt=select_account

http://localhost:3000/callback/github


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlcnMiOnsiZ29vZ2xlIjoiMTA4NjExNjkzODMyNzQ3Mzk1Mjg0In0sImlhdCI6MTY1NDg1OTE2NiwiZXhwIjoxNjU0ODYyNzY2fQ.3bsjd1fhZxiYHVTb48FZPdJwlMk0jjx9oki0QsIAP20
*/