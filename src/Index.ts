import bodyParser from "body-parser";
import express from "express";

import sequelize from "./config/database";
import router from "./router";
import Mimick from "./config/database";
let cors = require("cors");
const port = 5000;
const app = express();
app.use(cors());
app.use(router);

app.use(bodyParser.json());

Mimick.sync({ alter: true })
  .then(() => {
    console.log("Tables created");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (_req, res) => {
  res.send("Welcome");
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
