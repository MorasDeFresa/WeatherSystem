const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class Sensores extends Model {}

Sensores.init(
  {
    idSensor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    referencia: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    margenError: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Sensores",
    tableName: "Sensores",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Sensores;

console.log(Sensores === sequelize.models.Sensores);