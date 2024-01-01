import { DataTypes, Sequelize } from "sequelize";
import MiMick from "../config/database";
import Postmodel from "./Post";
const Categorymodel = MiMick.define(
  "category",
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

Categorymodel.hasMany(Postmodel);
Postmodel.belongsTo(Categorymodel);

export default Categorymodel;
