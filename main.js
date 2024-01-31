const express = require("express");
const morgan = require("morgan");
const routes = require("./router/main.route");
require("dotenv").config();
const app = express();
const start = require("./db/connect");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/admin", routes);

const startingserver = async () => {
  try {
    await start(process.env.MONGO_URL).then(() => {
      console.log("Connected to database");
    });
    app.listen(port, () => {
      console.log(`Server is runnig on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startingserver();
