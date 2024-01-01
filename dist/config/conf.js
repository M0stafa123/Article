"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DIALECT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;
const conf = {
    dev: {
        username: "postgres",
        password: "postgres",
        database: "Articels",
        dialect: "postgres",
    },
};
exports.default = conf;
