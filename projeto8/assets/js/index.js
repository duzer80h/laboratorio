
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