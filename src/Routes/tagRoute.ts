import express from "express";
import Tagmodel from "../models/Tag";
import Postmodel from "../models/Post";
import bodyParser from "body-parser";
const TagRoute = express.Router();
TagRoute.use(bodyParser.json());

TagRoute.get("/:id?", (req, res) => {
  var params = req.params;
  let qeery;
  if (params.id) {
    qeery = Tagmodel.findOne({ where: { id: params.id } });
  } else {
    qeery = Tagmodel.findAll();
  }
  qeery.then((r) => {
    res.json(r);
  });
});

TagRoute.delete("/:id", (req, res) => {
  Tagmodel.destroy({ where: { id: req.params.id } }).then((tag) => {
    res.json(tag);
  });
});

TagRoute.post("/", (req, res) => {
  let body = req.body;
  Tagmodel.create(body).then((tag) => {
    res.json(tag);
  });
});

TagRoute.get("/:id/posts", (req, res) => {
  Tagmodel.findAll({
    where: { id: req.params.id },
    include: [Postmodel],
  }).then((result) => {
    res.json(result);
  });
});

export default TagRoute;
