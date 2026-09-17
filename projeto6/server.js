const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const ROOT = __dirname;

function lerArquivo(caminho) {
  return fs.readFileSync(caminho);
}

app.use("/assets", express.static(path.join(ROOT, "assets")));

app.get("/", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "index.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/carrinho", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "carrinho.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/checkout", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "checkout.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/sobre", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "sobre.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/contato", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "contato.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/servicos", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "servicos.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/blog", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "blog.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/servicos/adubacao-e-fertilizacao", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "servico-adubacao-e-fertilizacao.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/servicos/controle-de-pragas", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "servico-controle-de-pragas.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/servicos/corte-e-manutencao", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "servico-corte-e-manutencao.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/blog/titulo-1", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "blog-titulo-1.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/blog/titulo-2", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "blog-titulo-2.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
app.get("/blog/titulo-3", (req, res) => {
  const header = lerArquivo(path.join(ROOT, "partials", "header.html"));
  const index = lerArquivo(path.join(ROOT, "pages", "blog-titulo-3.html"));
  const footer = lerArquivo(path.join(ROOT, "partials", "footer.html"));
  res
    .status(200)
    .type("html")
    .send(Buffer.concat([header, index, footer]));
});
const port = 3000;

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
