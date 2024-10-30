const { Sequelize, DataTypes, Model } = require("sequelize");

class RangoCritico extends Model {}

RangoCritico.init(
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
    sequelize,
    modelName: "RangoCritico",
    tableName: "RangoCritico",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = RangoCritico;

console.log(RangoCritico === sequelize.models.RangoCritico);
