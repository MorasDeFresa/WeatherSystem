const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'UnidadesDeMedida',
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
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
)
}

