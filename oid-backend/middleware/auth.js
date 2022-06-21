const auth =
  ({ block }) =>
  (req, res, next) => {
    console.log("authenticating...");
    const userid = req.get("authorization");
    res.locals.userid = userid;
    if (block && !res.locals.userid) return res.sendStatus(401);
    next();
  };

module.exports = auth;

/*
higher order function
*/
