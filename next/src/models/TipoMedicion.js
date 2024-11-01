const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'TipoMedicion',
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
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
)

}

