const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Cultivos',
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
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
)
}

