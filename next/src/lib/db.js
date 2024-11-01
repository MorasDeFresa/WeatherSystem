const { Sequelize } = require("sequelize");
const {association,handlerAssociationModels} = require("../models/associations") 

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    dialectModule: require("mysql2"),
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    timezone: "-05:00"
  }
);

association(sequelize)
handlerAssociationModels(sequelize)
module.exports = { sequelize, ...sequelize.models };
