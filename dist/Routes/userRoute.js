"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const Post_1 = __importDefault(require("../models/Post"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserRoute = express_1.default.Router();
UserRoute.use(body_parser_1.default.json());
UserRoute.get("/:id?", (req, res) => {
    var params = req.params;
    let qeery;
    if (params.id) {
        qeery = User_1.default.findOne({ where: { id: params.id } });
    }
    else {
        qeery = User_1.default.findAll();
    }
    qeery.then((r) => {
        res.json(r);
    });
});
UserRoute.post("/add", (req, res) => {
    let body = req.body;
    User_1.default.create(req.body).then((users) => {
        res.json(users);
    });
});
UserRoute.get("/:id/posts", (req, res) => {
    User_1.default.findAll({
        where: { user_id: req.params.id },
        include: [Post_1.default],
    }).then((result) => {
        res.json(result);
    });
});
UserRoute.delete("/:id", (req, res) => {
    User_1.default.destroy({ where: { id: req.params.id } }).then((users) => {
        res.json(users);
    });
});
exports.default = UserRoute;
