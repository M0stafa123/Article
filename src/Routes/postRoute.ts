import express from "express";
import Postmodel from "../models/Post";
import bodyParser from "body-parser";
import Tagmodel from "../models/Tag";
import Usermodel from "../models/User";
import Categorymodel from "../models/category";

const PostRoute = express.Router();
PostRoute.use(bodyParser.json());

// find one or more posts
PostRoute.get("/:id?", (req, res) => {
  let query;
  if (req.params.id) {
    query = Postmodel.findOne({ where: { id: req.params.id } });
  } else {
    query = Postmodel.findAll();
  }
  query.then((r: any) => {
    res.json(r);
  });
});

PostRoute.post("/", (req, res) => {
  Postmodel.create(req.body).then((post: object) => {
    res.send(post).json();
  });
  const tags = req.body.tags.map(async (tag: any) => {
    const [instance, created] = await Tagmodel.findOrCreate({
      where: { title: tag },
      defaults: { title: tag },
    });
  });
  Usermodel.findAll({ where: { id: req.body.userId } })
    .then(() => Postmodel.create(req.body))
    .then((post: any) => {
      Promise.all(tags).then((storedTags) => post.addTags(storedTags));
      return post;
    })
    .then((post) => {
      Postmodel.findOne({
        where: { id: post.id },
        include: [Usermodel, Tagmodel, Categorymodel],
      });
      // .then((result: any) => {
      //   res.json(result);
      // });
    })
    .catch((err) => {
      console.log(err);
    });
});
PostRoute.delete("/:id", (req, res) => {
  Postmodel.destroy({ where: { id: req.params.id } }).then((result) => {
    res.json(result);
  });
});
export default PostRoute;
