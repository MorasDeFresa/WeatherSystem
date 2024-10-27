const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class TipoMedicion extends Model {}

TipoMedicion.init(
  {
    idTipoMedicion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreTipoMedicion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TipoMedicion",
    tableName: "TipoMedicion",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = TipoMedicion;

console.log(TipoMedicion === sequelize.models.TipoMedicion);
