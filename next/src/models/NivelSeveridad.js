const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class NivelSeveridad extends Model {}

NivelSeveridad.init(
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
    sequelize,
    modelName: "NivelSeveridad",
    tableName: "NivelSeveridad",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = NivelSeveridad;

console.log(NivelSeveridad === sequelize.models.NivelSeveridad);
