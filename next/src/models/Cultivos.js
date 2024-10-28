const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class Cultivos extends Model {}

Cultivos.init(
  {
    idCultivos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreSiembra: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    variedadSiembra: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fechaSiembra: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cultivos",
    tableName: "Cultivos",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Cultivos;

console.log(Cultivos === sequelize.models.Cultivos);
console.log("test");
