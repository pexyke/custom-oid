const login = async (req, res) => {
  // receive google code
  // exchange it for token
  // get googleId
  // googleId ? send jwt token : create user and send jwt token
};

/* tutorial */
const user = async (req, res) => {
  const { password } = req.body;
  if (!password) return res.sendStatus(400);
  res.status(200).json({ userId: 0 });
};
/* tutorial */

exports.login = login;
exports.user = user;
