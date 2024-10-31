const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'NivelSeveridad',
  {
    idNivelSeveridad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nivel: {
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


