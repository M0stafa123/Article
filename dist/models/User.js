"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Post_1 = __importDefault(require("./Post"));
const Usermodel = database_1.default.define("user", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$", "i"],
        },
    },
}, {
    timestamps: false,
});
Usermodel.hasMany(Post_1.default);
Post_1.default.belongsTo(Usermodel);
exports.default = Usermodel;
