
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
  