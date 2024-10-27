const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class LecturaSensor extends Model {}

LecturaSensor.init(
  {
    idLecturaSensor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    valorLectura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fechaLectura: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "LecturaSensor",
    tableName: "LecturaSensor",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = LecturaSensor;

console.log(LecturaSensor === sequelize.models.LecturaSensor);
