window
  .fetch("/assets/json/produtos.json")
  .then((resposta) => resposta.json())
  .then((produtos) => {
    let html = "";
    produtos.forEach((produto) => {
      html += `
              <div class="card p-2">
            <div class="ratio-lg-1x1 text-center">
              <img
                class="img-fluid"
                src="/assets/img/${produto.imagem}"
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
  // console.log(id);
  // console.log(nome);
  // console.log(imagem);
  // console.log(preco);
  // console.log(localStorage.getItem('carrinho'));
  // console.log(JSON.parse(localStorage.getItem('carrinho')));
  let carrinhoArray = JSON.parse(localStorage.getItem("carrinho")) || [];
  let produtoExistente = carrinhoArray.find((produto) => produto.id === id);
  console.log(produtoExistente);
  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    let novoProduto = {
      id: id,
      nome: nome,
      imagem: imagem,
      preco: preco,
      quantidade: 1,
    };
    carrinhoArray.push(novoProduto);
  }
  // console.log(carrinhoArray);
  // console.log(JSON.stringify(carrinhoArray));
  localStorage.setItem("carrinho", JSON.stringify(carrinhoArray));
  atualizarContadorDeProdutosAoCarrinho();
}

window
  .fetch("/assets/json/servicos.json")
  .then((resposta) => resposta.json())
  .then((servicos) => {
    let html = "";
    servicos.forEach((servico) => {
      html += `
      <div class= "mt-md-5">
              <div
            class="capa shadow"
            style="
              background-image: url('/assets/img/${servico.imagem}');
            "
          ></div>
          <h3 class="text-warning mt-3 fs-3 fw-normal">${servico.nome}</h3>
          <p class="mt-1 mb-1">${servico.descricao}</p>
          <a
            href="${servico.url}"
            class="text-dark text-decoration-none d-flex align-items-center column-gap-1"
          >
            <span class="btn btn-success btn-sm">+</span>
            <span>Saiba mais</span>
          </a>
        </div>  
    `;
    });
    document.getElementById("lista-de-servicos").innerHTML = html;
  });
window
  .fetch("/assets/json/posts.json")
  .then((resposta) => resposta.json())
  .then((posts) => {
    let html = "";
    posts.forEach((post) => {
      html += `
      <div>
          <div
            style="background-image: url('/assets/img/${post.imagem}')"
            class="capa"
          ></div>
          <h3 class="fs-3 fw-normal mb-1 mt-3">${post.titulo}</h3>
          <p class="mb-1">
            ${post.resumo}
          </p>
          <a href="${post.url}" class="text-decoration-none text-warning">Leia mais</a>
        </div>
    `;
    });
    document.getElementById("lista-de-posts").innerHTML = html;
  });
  document.getElementById('formulario-fale-conosco').addEventListener('submit', function(evento){
    evento.preventDefault();
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();
    let texto = `*Mensagem do fale conosco!*\n\n`;
    texto += `*Nome:* ${nome}\n`;
    texto += `*Email:* ${email}\n`;
    texto += `*Telefone:* ${telefone}\n`;
    texto += `*Mensagem:* ${mensagem}\n`;
    let textoCodificado = encodeURIComponent(texto);
    let whatsapp = '+5517997829921';
    window.open(`https://wa.me/${whatsapp}?text=${textoCodificado}`, '_blank');
    this.reset();
  });