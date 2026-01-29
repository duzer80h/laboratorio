window
  .fetch("http://127.0.0.1:5500/projeto4/json/produtos.json")
  .then((resposta) => resposta.json())
  .then((produtos) => {
    let html = "";
    produtos.forEach((produto) => {
      html += `
              <div class="card p-2">
            <div class="ratio-lg-1x1 text-center">
              <img
                class="img-fluid"
                src="./img/${produto.imagem}"
                alt="${produto.nome}"
              />
            </div>
            <h3 class="text-uppercase">${produto.nome}</h3>
            <p class="mt-1 mb-1">${produto.descricao}...</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="fs-2">
                R$ <span class="text-success">${produto.preco.toFixed(2).replace(".", ",")}</span>
              </span>
              <a class="btn btn-success" onclick="adicionarProdutoAoCarrinho(${produto.id},'${produto.nome}','${produto.imagem}',${produto.preco})">
                <i class="fa-solid fa-plus"></i>
              </a>
            </div>
          </div>
    `;
    });
    document.getElementById("lista-de-produtos").innerHTML = html;
  });
function adicionarProdutoAoCarrinho(id, nome, imagem, preco) {
  console.log(id);
  console.log(nome);
  console.log(imagem);
  console.log(preco);
}
