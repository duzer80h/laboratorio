document.getElementById("hamburguer").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("d-none");
});
function contadorDeProdutosNoLocalStorage() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho"));
  let contador = 0;
  carrinho.forEach((produto) => (contador += produto.quantidade));
  return contador;
}
function atualizarContadorDeProdutosAoCarrinho() {
  console.log("Executando a função atualizarContadorDeProdutosAoCarrinho...");
  let carrinhoQuantidade = document.getElementById("carrinho-quantidade");
  console.log(carrinhoQuantidade);
  carrinhoQuantidade.textContent = contadorDeProdutosNoLocalStorage();
}
