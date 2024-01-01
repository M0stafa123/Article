import dotenv from "dotenv";

dotenv.config();
const { DIALECT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const conf = {
  dev: {
    username: "postgres",
    password: "postgres",
    database: "Articels",
    dialect: "postgres",
  },
};

export default conf;
