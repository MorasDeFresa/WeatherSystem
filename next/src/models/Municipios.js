const { Sequelize, DataTypes, Model } = require("sequelize");

class Municipios extends Model {}

Municipios.init(
  {
    idMunicipio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreMunicipio: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Municipios",
    tableName: "Municipios",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Municipios;

console.log(Municipios === sequelize.models.Municipios);
