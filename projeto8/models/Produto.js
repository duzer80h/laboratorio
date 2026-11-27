const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Produto = sequelize.define("produtos", {
  idProduto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Produto;
