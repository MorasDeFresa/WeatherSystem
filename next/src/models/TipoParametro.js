const { Sequelize, DataTypes, Model } = require("sequelize");

class TipoParametro extends Model {}

TipoParametro.init(
  {
    idTipoParametro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Parametro: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TipoParametro",
    tableName: "TipoParametro",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = TipoParametro;

console.log(TipoParametro === sequelize.models.TipoParametro);
