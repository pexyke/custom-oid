const logger = require("../util/logger");

const errorHandler = (err, req, res, next) => {
  console.log(err)
  logger.error(new Error("server error"), err.toString());
  res.status(500).json("Caught by error middleware");
};

module.exports = errorHandler;

/*

*/