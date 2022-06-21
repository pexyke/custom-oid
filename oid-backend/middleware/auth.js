const jwt = require("jsonwebtoken");

const auth =
  ({ block }) =>
  (req, res, next) => {
    console.log("authenticating...");
    const token = req.headers.authorization;
    if (!token && block) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err && block) res.sendStatus(401);
      res.locals.user = payload;
    });

    next();
  };

module.exports = auth;

/*

*/