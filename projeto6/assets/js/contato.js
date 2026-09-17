
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