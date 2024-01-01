"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const router_1 = __importDefault(require("./router"));
const database_2 = __importDefault(require("./config/database"));
const port = 5000;
const app = (0, express_1.default)();
app.use(router_1.default);
app.use(body_parser_1.default.json());
database_2.default.sync({ alter: true })
    .then(() => {
    console.log("Tables created");
})
    .catch((err) => {
    console.log(err);
});
app.get("/", (_req, res) => {
    res.send("Welcome");
});
try {
    database_1.default.authenticate();
    console.log("Connection has been established successfully.");
}
catch (error) {
    console.error("Unable to connect to the database:", error);
}
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
