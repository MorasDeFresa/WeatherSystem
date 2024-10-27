const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class CondicionesIdeales extends Model {}

CondicionesIdeales.init(
  {
    idCondicionesIdeales: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tempMinima: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tempMaxima: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humRelativaMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humRelativaMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    presionOptima: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CondicionesIdeales",
    tableName: "CondicionesIdeales",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = CondicionesIdeales;

console.log(CondicionesIdeales === sequelize.models.CondicionesIdeales);
