import { Sequelize } from "sequelize";
import conf from "./conf";
const Mimick = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "Articels",
  logging: false,
});

export default Mimick;
