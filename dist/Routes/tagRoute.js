"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Tag_1 = __importDefault(require("../models/Tag"));
const Post_1 = __importDefault(require("../models/Post"));
const body_parser_1 = __importDefault(require("body-parser"));
const TagRoute = express_1.default.Router();
TagRoute.use(body_parser_1.default.json());
TagRoute.get("/:id?", (req, res) => {
    var params = req.params;
    let qeery;
    if (params.id) {
        qeery = Tag_1.default.findOne({ where: { id: params.id } });
    }
    else {
        qeery = Tag_1.default.findAll();
    }
    qeery.then((r) => {
        res.json(r);
    });
});
TagRoute.delete("/:id", (req, res) => {
    Tag_1.default.destroy({ where: { id: req.params.id } }).then((tag) => {
        res.json(tag);
    });
});
TagRoute.post("/", (req, res) => {
    let body = req.body;
    Tag_1.default.create(body).then((tag) => {
        res.json(tag);
    });
});
TagRoute.get("/:id/posts", (req, res) => {
    Tag_1.default.findAll({
        where: { id: req.params.id },
        include: [Post_1.default],
    }).then((result) => {
        res.json(result);
    });
});
exports.default = TagRoute;
