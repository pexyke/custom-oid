const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json("Caught by error middleware");
};

module.exports = errorHandler;
