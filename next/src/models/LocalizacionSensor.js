const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'LocalizacionSensor',
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
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
)
}

