const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { text } = require("express");

const Artigo = sequelize.define(
  "artigos",
  {
    idArtigo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    resumo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
  },
  {
    timestamps: true,
  },
);
module.exports = Artigo;
