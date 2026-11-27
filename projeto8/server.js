const express = require("express");
const path = require("path");
const sequelize = require("./config/database");
const Servico = require("./models/Servico");
const Artigo = require("./models/Artigo");
const Produto = require("./models/Produto");
const app = express();
const ROOT = __dirname;

app.set("view engine", "ejs");
app.set("views", path.join(ROOT, "views"));

app.use("/assets", express.static(path.join(ROOT, "assets")));

app.get("/", async (req, res) => {
  const servicos = await Servico.findAll({
    order: [["nome", "asc"]],
  });
  const artigos = await Artigo.findAll({
    order: [["idArtigo", "desc"]]
  });
  const produtos = await Produto.findAll({
    order: [["idProduto", "desc"]]
  });
  res.render("pages/index", { servicos, artigos, produtos });
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
app.get("/produtos", async (req, res) => {
  const produtos = await Produto.findAll({
    raw: false,
    order: [["idProduto", "desc"]],
  });
  console.log(produtos);
  res.render("pages/produtos", { produtos });
});
app.get("/servicos", async (req, res) => {
  const servicos = await Servico.findAll({
    raw: true,
    order: [["nome", "asc"]],
  });
  res.render("pages/servicos", { servicos });
});
app.get("/servicos/:slug", async (req, res) => {
  const { slug } = req.params;
  const servico = await Servico.findOne({
    where: { slug },
    raw: true,
  });
  res.render("pages/servico", { servico });
});
app.get("/blog", async (req, res) => {
  const artigos = await Artigo.findAll({
    raw: true,
    order: [["idArtigo", "desc"]],
  });
  res.render("pages/blog", { artigos });
});
app.get("/blog/:slug", async (req, res) => {
  const { slug } = req.params;
  const artigo = await Artigo.findOne({
    raw: true,
    where: { slug },
  });
  res.render("pages/artigo", { artigo });
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
