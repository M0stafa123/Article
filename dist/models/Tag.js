"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Post_1 = __importDefault(require("./Post"));
const post_tag_1 = __importDefault(require("./post_tag"));
//import PostTag from "./post_tag";
const Tagmodel = database_1.default.define("tag", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
Post_1.default.belongsToMany(Tagmodel, {
    through: post_tag_1.default,
});
Tagmodel.belongsToMany(Post_1.default, {
    through: post_tag_1.default,
});
exports.default = Tagmodel;
