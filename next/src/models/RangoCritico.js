const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'RangoCritico',
  {
    idRangoCritico: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ValorMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ValorMax: {
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

console.log(RangoCritico === sequelize.models.RangoCritico);
