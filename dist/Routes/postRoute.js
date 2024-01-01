"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Post_1 = __importDefault(require("../models/Post"));
const body_parser_1 = __importDefault(require("body-parser"));
const Tag_1 = __importDefault(require("../models/Tag"));
const User_1 = __importDefault(require("../models/User"));
const category_1 = __importDefault(require("../models/category"));
const PostRoute = express_1.default.Router();
PostRoute.use(body_parser_1.default.json());
// find one or more posts
PostRoute.get("/:id?", (req, res) => {
    let query;
    if (req.params.id) {
        query = Post_1.default.findOne({ where: { id: req.params.id } });
    }
    else {
        query = Post_1.default.findAll();
    }
    query.then((r) => {
        res.json(r);
    });
});
PostRoute.post("/", (req, res) => {
    const tags = req.body.tags.map((tag) => __awaiter(void 0, void 0, void 0, function* () {
        const [instance, created] = yield Tag_1.default.findOrCreate({
            where: { title: tag },
            defaults: { title: tag },
        });
    }));
    User_1.default.findAll({ where: { id: req.body.userId } })
        .then(() => Post_1.default.create(req.body))
        .then((post) => {
        Promise.all(tags).then((storedTags) => post.addTags(storedTags));
        return post;
    })
        .then((post) => {
        Post_1.default.findOne({
            where: { id: post.id },
            include: [User_1.default, Tag_1.default, category_1.default],
        }).then((result) => {
            45;
            res.json(result);
        });
    });
});
exports.default = PostRoute;
