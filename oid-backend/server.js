require("dotenv").config();
const port = 4000;
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Template is listening on port ${port}. Run: "brew services start mongodb-community"`);
    });
  })
  .catch((error) => console.log(error));

/*
  app.listen for prod/dev mode
  docker build . -t first-backend
  mongodb+srv://doadmin:D520XCPUo47Q981h@first-demo-db-82fbcafe.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=first-demo-db

  .connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  */
