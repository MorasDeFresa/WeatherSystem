const { Sequelize, DataTypes, Model } = require("sequelize");

class CondicionesCriticas extends Model {}

CondicionesCriticas.init(
  {
    idCondicionesCriticas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreCondicion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    accionPrevencion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CondicionesCriticas",
    tableName: "CondicionesCriticas",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = CondicionesCriticas;

console.log(CondicionesCriticas === sequelize.models.CondicionesCriticas);
