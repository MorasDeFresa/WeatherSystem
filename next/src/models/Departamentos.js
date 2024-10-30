const { Sequelize, DataTypes, Model } = require("sequelize");

class Departamentos extends Model {}

Departamentos.init(
  {
    idDepartamentos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreDepartamento: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Departamentos",
    tableName: "Departamentos",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Departamentos;

console.log(Departamentos === sequelize.models.Departamentos);
