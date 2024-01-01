import TagRoute from "./Routes/tagRoute";
import UserRoute from "./Routes/userRoute";
import CategoryRoute from "./Routes/categoryRoute";
import PostRoute from "./Routes/postRoute";
import express from "express";

const router = express.Router();

router.use("/tags", TagRoute);
router.use("/categories", CategoryRoute);
router.use("/posts", PostRoute);
router.use("/users", UserRoute);

export default router;
