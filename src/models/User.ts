import { DataTypes, Sequelize } from "sequelize";
import MiMick from "../config/database";
import Postmodel from "./Post";
const Usermodel = MiMick.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"],
      },
    },
  },
  {
    timestamps: false,
  }
);

Usermodel.hasMany(Postmodel);
Postmodel.belongsTo(Usermodel);

export default Usermodel;
