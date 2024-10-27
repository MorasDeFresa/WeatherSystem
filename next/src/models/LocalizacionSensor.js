const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class LocalizacionSensor extends Model {}

LocalizacionSensor.init(
  {
    idLocalizacionSensor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    latitud: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitud: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fechaUbicacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "LocalizacionSensor",
    tableName: "LocalizacionSensor",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = LocalizacionSensor;

console.log(LocalizacionSensor === sequelize.models.LocalizacionSensor);
