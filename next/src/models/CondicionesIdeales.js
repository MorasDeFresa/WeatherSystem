const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'CondicionesIdeales',
  {
    idCondicionesIdeales: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tempMinima: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tempMaxima: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humRelativaMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humRelativaMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    presionOptima: {
      type: DataTypes.FLOAT,
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




