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
                <button class="btn" id="quantidade-produto-${produto.id}">${produto.quantidade}</button>
              </td>
              <td class="text-center">R$ ${produto.preco.toLocaleString(
                "pt-BR",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                },
              )}</td>
              <td class="text-center">R$ <span id="total-produto-${produto.id}">${(
                produto.preco * produto.quantidade
              ).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</span></td>
              
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

document.getElementById('formulario-pedido').addEventListener('submit',function(evento){
  evento.preventDefault();
  let nome = document.getElementById('nome').value.trim();
  let email = document.getElementById('email').value.trim();
  let whatsapp = document.getElementById('whatsapp').value.trim();
  let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
  console.log(produtos);
  let mensagem = `*Novo pedido recebido!*\n\n`;
  mensagem += `*Nome:* ${nome}\n`;
  mensagem += `*Email:* ${email}\n`;
  mensagem += `*WhatsApp:* ${whatsapp}\n\n`;
  mensagem += `*Produtos selecionados:*`;
  let total = 0;
  produtos.forEach((produto, index) => {
    let subtotal = produto.preco*produto.quantidade;
    total += subtotal;
    mensagem += `\n${index+1}. ${produto.nome} - ${produto.quantidade} x R$ ${produto.preco} = R$ ${subtotal.toFixed(2).replace('.',',')}`;
  });
  mensagem += `\n\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}`;
  let mensagemCodificada = encodeURIComponent(mensagem);
  let whatsappEmpresa = '+5517997829921'; 
  window.open(`https://wa.me/${whatsappEmpresa}?text=${mensagemCodificada}`, '_blank');
  localStorage.removeItem('carrinho');
  window.location.href = './obrigado.html';
});