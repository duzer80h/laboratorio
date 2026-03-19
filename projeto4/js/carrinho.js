document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorDeProdutosAoCarrinho();
  let produtos = JSON.parse(localStorage.getItem("carrinho"));
  let html = "";
  produtos.forEach((produto) => {
    html += `
          <tr id="linha-produto-${produto.id}">
              <td class="d-flex align-items-center column-gap-3">
                <img
                src="./img/${produto.imagem}"
                alt="Borrifador"
                style="max-width: 100px; max-height: 100px"
                />
                <div>${produto.nome}</div>
              </td>
              <td class="text-center">
                <button class="btn"><i class="fa-solid fa-minus"></i></button>
                <button class="btn">${produto.quantidade}</button>
                <button class="btn"><i class="fa-solid fa-plus"></i></button>
              </td>
              <td class="text-center">R$ ${produto.preco.toLocaleString(
                "pt-BR",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                },
              )}</td>
              <td class="text-center">R$ ${(
                produto.preco * produto.quantidade
              ).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</td>
              <td class="text-center">
                <button class="btn btn-warning" onclick="removerProdutoDoCarrinho(${produto.id})">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </td>
            </tr>
        `;
  });
  console.log(produtos.length);
  if (produtos.length === 0) {
    html += `
      <tr> <td colspan="5"> Carrinho vazio. </td> </tr>
         `;
  }
  document.getElementById("corpo-carrinho").innerHTML = html;
});

function removerProdutoDoCarrinho(id) {
  //console.log(id);
  let confirmacao = window.confirm(
    "Deseja realmente excluir o produto do carrinho?",
  );
  console.log(confirmacao);
  if (confirmacao) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    console.log(carrinho);
    carrinho = carrinho.filter((produto) => produto.id !== id);
    console.log(carrinho);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    document.getElementById(`linha-produto-${id}`).remove();
    if (carrinho.length == 0) {
      document.getElementById("corpo-carrinho").innerHTML =
        "<tr> <td> Carrinho vazio. </td> </tr>";
    }
    atualizarContadorDeProdutosAoCarrinho();
  }
}
