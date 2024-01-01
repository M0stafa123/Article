"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = __importDefault(require("../models/category"));
const Post_1 = __importDefault(require("../models/Post"));
const body_parser_1 = __importDefault(require("body-parser"));
const CategoryRoute = express_1.default.Router();
CategoryRoute.use(body_parser_1.default.json());
CategoryRoute.get("/:id?", (req, res) => {
    var params = req.params;
    let qeery;
    if (params.id) {
        qeery = category_1.default.findOne({ where: { id: params.id } });
    }
    else {
        qeery = category_1.default.findAll();
    }
    qeery.then((r) => {
        res.json(r);
    });
});
CategoryRoute.post("/", (req, res) => {
    let body = req.body;
    category_1.default.create(body).then((category) => {
        res.json(category);
    });
});
CategoryRoute.delete("/:id", (req, res) => {
    category_1.default.destroy({ where: { id: req.params.id } }).then((category) => {
        res.json(category);
    });
});
CategoryRoute.get("/:id/posts", (req, res) => {
    category_1.default.findAll({
        where: { id: req.params.id },
        include: [Post_1.default],
    }).then((result) => {
        res.json(result);
    });
});
exports.default = CategoryRoute;
