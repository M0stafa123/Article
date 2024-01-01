import { DataTypes, Sequelize } from "sequelize";
import MiMick from "../config/database";
import Postmodel from "./Post";
import Tagmodel from "./Tag";

const PostTag = MiMick.define(
  "Post_tag",
  {
    Posttag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

export default PostTag;
