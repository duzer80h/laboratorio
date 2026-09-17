function contadorDeProdutosNoLocalStorage() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho"));
  let contador = 0;
  if(carrinho){
    carrinho.forEach((produto) => (contador += produto.quantidade));
  }
  return contador;
}
function atualizarContadorDeProdutosAoCarrinho() {
  document.getElementById("carrinho-quantidade").textContent = contadorDeProdutosNoLocalStorage();
  document.getElementById("carrinho-quantidade-mobile").textContent = contadorDeProdutosNoLocalStorage();
}
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("hamburguer").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("d-none");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorDeProdutosAoCarrinho();
});