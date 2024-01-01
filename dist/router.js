"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tagRoute_1 = __importDefault(require("./Routes/tagRoute"));
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
const categoryRoute_1 = __importDefault(require("./Routes/categoryRoute"));
const postRoute_1 = __importDefault(require("./Routes/postRoute"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use("/tags", tagRoute_1.default);
router.use("/categories", categoryRoute_1.default);
router.use("/posts", postRoute_1.default);
router.use("/users", userRoute_1.default);
exports.default = router;
