import express from "express";
import Usermodel from "../models/User";
import Postmodel from "../models/Post";
import bodyParser from "body-parser";
const UserRoute = express.Router();
UserRoute.use(bodyParser.json());

UserRoute.get("/:id?", (req, res) => {
  var params = req.params;
  let qeery;
  if (params.id) {
    qeery = Usermodel.findOne({ where: { id: params.id } });
  } else {
    qeery = Usermodel.findAll();
  }
  qeery.then((r) => {
    res.json(r);
  });
});

UserRoute.post("/add", (req, res) => {
  let body = req.body;
  Usermodel.create(req.body).then((users) => {
    res.json(users);
  });
});

UserRoute.get("/:id/posts", (req, res) => {
  Usermodel.findAll({
    where: { user_id: req.params.id },
    include: [Postmodel],
  }).then((result) => {
    res.json(result);
  });
});

UserRoute.delete("/:id", (req, res) => {
  Usermodel.destroy({ where: { id: req.params.id } }).then((users) => {
    res.json(users);
  });
});

export default UserRoute;
