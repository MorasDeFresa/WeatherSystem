const { Sequelize, DataTypes, Model } = require("sequelize");

class Usuarios extends Model {}

Usuarios.init(
  {
    idUsuarios: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Usuarios",
    tableName: "Usuarios",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Usuarios;

console.log(Usuarios === sequelize.models.Usuarios);
