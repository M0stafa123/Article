"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Mimick = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "Articels",
    logging: false,
});
exports.default = Mimick;
