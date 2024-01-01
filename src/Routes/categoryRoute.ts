import express from "express";
import Categorymodel from "../models/category";
import Postmodel from "../models/Post";
import bodyParser from "body-parser";
const CategoryRoute = express.Router();
CategoryRoute.use(bodyParser.json());

CategoryRoute.get("/:id?", (req, res) => {
  var params = req.params;
  let qeery;
  if (params.id) {
    qeery = Categorymodel.findOne({ where: { id: params.id } });
  } else {
    qeery = Categorymodel.findAll();
  }
  qeery.then((r) => {
    res.json(r);
  });
});

CategoryRoute.post("/", (req, res) => {
  let body = req.body;
  Categorymodel.create(body).then((category) => {
    res.json(category);
  });
});

CategoryRoute.delete("/:id", (req, res) => {
  Categorymodel.destroy({ where: { id: req.params.id } }).then((category) => {
    res.json(category);
  });
});

CategoryRoute.get("/:id/posts", (req, res) => {
  Categorymodel.findAll({
    where: { id: req.params.id },
    include: [Postmodel],
  }).then((result) => {
    res.json(result);
  });
});

export default CategoryRoute;
