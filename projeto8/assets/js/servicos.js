
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
