document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorDeProdutosAoCarrinho();
  let produtos = JSON.parse(localStorage.getItem("carrinho"));
  if (produtos) {
    if (produtos.length > 0) {
      document.getElementById("carrinho-div-checkout").style.display = "block";
    }
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
      <button class="btn" onclick="diminuiQuantidadeDoProdutoNoCarrinho(${produto.id})"><i class="fa-solid fa-minus"></i></button>
      <button class="btn" id="quantidade-produto-${produto.id}">${produto.quantidade}</button>
      <button class="btn" onclick="aumentaQuantidadeDoProdutoNoCarrinho(${produto.id})"><i class="fa-solid fa-plus"></i></button>
      </td>
      <td class="text-center">R$ ${produto.preco.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td class="text-center">R$ <span id="total-produto-${produto.id}">${(
        produto.preco * produto.quantidade
      ).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</span></td>
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
  }
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
    document.getElementById(`linha-produto-mb-${id}`).remove();
    if (carrinho.length == 0) {
      document.getElementById("corpo-carrinho").innerHTML =
        '<tr> <td colspan="5"> Carrinho vazio. </td> </tr>';
      document.getElementById("corpo-carrinho-mobile").innerHTML =
        '<div class="text-center"> Carrinho vazio </div>';
      document.getElementById("carrinho-div-checkout").style.display = "none";
    }
    atualizarContadorDeProdutosAoCarrinho();
  }
}

function aumentaQuantidadeDoProdutoNoCarrinho(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let produto = carrinho.find((produto) => produto.id === id);
  if (produto) {
    produto.quantidade++;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }
  atualizaQuantidadeDoProdutoNaLinha(id);
  atualizarContadorDeProdutosAoCarrinho();
  atualizaTotalDoProdutoNaLinha(id);
}

function diminuiQuantidadeDoProdutoNoCarrinho(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let produto = carrinho.find((produto) => produto.id === id);
  if (produto && produto.quantidade > 1) {
    produto.quantidade--;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }
  atualizaQuantidadeDoProdutoNaLinha(id);
  atualizarContadorDeProdutosAoCarrinho();
  atualizaTotalDoProdutoNaLinha(id);
}

function atualizaQuantidadeDoProdutoNaLinha(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let produto = carrinho.find((produto) => produto.id === id);
  document.getElementById(`quantidade-produto-${id}`).textContent =
    produto.quantidade;
  document.getElementById(`quantidade-produto-mb-${id}`).textContent =
    produto.quantidade;
}

function atualizaTotalDoProdutoNaLinha(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let produto = carrinho.find((produto) => produto.id === id);
  document.getElementById(`total-produto-${id}`).textContent = (
    produto.quantidade * produto.preco
  ).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorDeProdutosAoCarrinho();
  let produtos = JSON.parse(localStorage.getItem("carrinho"));
  if (produtos) {
    if (produtos.length > 0) {
      document.getElementById("carrinho-div-checkout").style.display = "block";
    }
    let html = "";
    produtos.forEach((produto) => {
      html += `
      <div id="linha-produto-mb-${produto.id}">
      <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
      <img src="./img/${produto.imagem}" alt="${
        produto.nome
      }" style="width: 75px;">
    <span>
    ${produto.nome}
    <br>
    R$ <span id="total-produto-mb-${produto.id}">
    ${(produto.preco * produto.quantidade).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}
    </span>
    </span>
    </div>
    <div class="d-flex">
    <div class="d-flex botoes">
    <button class="btn" onclick="diminuiQuantidadeDoProdutoNoCarrinho(${
      produto.id
    })">
      <i class="fa-solid fa-minus"></i>
      </button>
      <button class="btn" id="quantidade-produto-mb-${produto.id}">
      ${produto.quantidade}
      </button>
      <button class="btn" onclick="aumentaQuantidadeDoProdutoNoCarrinho(${
        produto.id
      })">
        <i class="fa-solid fa-plus"></i>
        </button>
        </div>
        <div class="text-center ps-2">
        <button class="btn btn-warning" onclick="removerProdutoDoCarrinho(${
          produto.id
        })">
          <i class="fa-solid fa-xmark"></i>
          </button>
          </div>
          </div>
          </div>
          </div>
          `;
    });
    console.log(produtos.length);
    if (produtos.length === 0) {
      html += '<div class="text-center"> Carrinho vazio </div>';
    }
    document.getElementById("corpo-carrinho-mobile").innerHTML = html;
  }
});
