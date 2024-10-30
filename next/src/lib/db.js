const { Sequelize } = require("sequelize");
const {association} = require("../models/associations") 

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    dialectModule: require("mysql2"),
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

const models = association(sequelize)
export { sequelize, models };
