import { DataTypes, Sequelize } from "sequelize";
import MiMick from "../config/database";
import Postmodel from "./Post";
import PostTag from "./post_tag";
//import PostTag from "./post_tag";
const Tagmodel = MiMick.define(
  "tag",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Postmodel.belongsToMany(Tagmodel, {
  through: PostTag,
});
Tagmodel.belongsToMany(Postmodel, {
  through: PostTag,
});

export default Tagmodel;
