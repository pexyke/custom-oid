const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const corsOptions = {
  origin: process.env.APP_URL, // a FE localhost kell ide
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); // body-ban erkezo json-t parse-olni tudja
app.use([logger]); // use this middleware on every request

const dashboardRoutes = require("./route/dashboard");
app.use("/api/dashboards", dashboardRoutes);
const userRoutes = require("./route/user.js");
app.use("/api/user", userRoutes);
/* tutorial */
const userRouter = require("./route/user");
app.use("/user", userRouter);
/* tutorial */

app.get("/", (req, res) => {
  console.log("Health check completed");
  res.sendStatus(200);
});

app.use(errorHandler);

module.exports = app;

/*

*/
