const express = require("express");
const path = require("path");
const sequelize = require("./config/database");
const Servico = require("./models/Servico");
const app = express();
const ROOT = __dirname;

app.set("view engine", "ejs");
app.set("views", path.join(ROOT, "views"));

app.use("/assets", express.static(path.join(ROOT, "assets")));

app.get("/", (req, res) => {
  res.render("pages/index");
});
app.get("/carrinho", (req, res) => {
  res.render("pages/carrinho");
});
app.get("/checkout", (req, res) => {
  res.render("pages/checkout");
});
app.get("/sobre", (req, res) => {
  res.render("pages/sobre");
});
app.get("/contato", (req, res) => {
  res.render("pages/contato");
});
app.get("/servicos", (req, res) => {
  res.render("pages/servicos");
});
app.get("/blog", (req, res) => {
  res.render("pages/blog");
});
app.get("/servicos/adubacao-e-fertilizacao", (req, res) => {
  res.render("pages/servico-adubacao-e-fertilizacao");
});
app.get("/servicos/controle-de-pragas", (req, res) => {
  res.render("pages/servico-controle-de-pragas");
});
app.get("/servicos/corte-e-manutencao", (req, res) => {
  res.render("pages/servico-corte-e-manutencao");
});
app.get("/blog/titulo-1", (req, res) => {
  res.render("pages/blog-titulo-1");
});
app.get("/blog/titulo-2", (req, res) => {
  res.render("pages/blog-titulo-2");
});
app.get("/blog/titulo-3", (req, res) => {
    res.render("pages/blog-titulo-3");
});
const port = 3000;

async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log("Banco de dados conectado.");

    await sequelize.sync();
    console.log("Tabelas sincronizadas.");

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (erro) {
    console.error("Erro ao iniciar o servidor:", erro);
  }
}

iniciarServidor();