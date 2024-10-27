const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class UnidadesDeMedida extends Model {}

UnidadesDeMedida.init(
  {
    idUnidadesDeMedida: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreUnidadMedida: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    simboloUnidad: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UnidadesDeMedida",
    tableName: "UnidadesDeMedida",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = UnidadesDeMedida;

console.log(UnidadesDeMedida === sequelize.models.UnidadesDeMedida);
