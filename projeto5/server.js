const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".json": "application/json",
};

function lerArquivo(caminho) {
  return fs.readFileSync(caminho);
}
const server = http.createServer((req, res) => {
  if (req.url.startsWith("/assets/")) {
    const caminhoArquivo = path.join(ROOT, "." + req.url);
    if (fs.existsSync(caminhoArquivo)) {
      const extensao = path.extname(caminhoArquivo).toLowerCase();

      res.writeHead(200, {
        "Content-Type": MIME[extensao] || "application/octet-stream",
      });

      return res.end(lerArquivo(caminhoArquivo));
    }
  }
  console.log(req.url);
  if (req.url === "/") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "index.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  else if (req.url === "/carrinho") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "carrinho.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
    else if (req.url === "/checkout") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "checkout.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
    else if (req.url === "/sobre") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "sobre.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
    else if (req.url === "/contato") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "contato.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  else if (req.url === "/servicos") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "servicos.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  else if (req.url === "/blog") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "blog.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  else if (req.url === "/servicos/adubacao-e-fertilizacao") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "servico-adubacao-e-fertilizacao.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  else if (req.url === "/servicos/controle-de-pragas") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "servico-controle-de-pragas.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  else if (req.url === "/servicos/corte-e-manutencao") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "servico-corte-e-manutencao.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  else if (req.url === "/blog/titulo-1") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "blog-titulo-1.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
    else if (req.url === "/blog/titulo-2") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "blog-titulo-2.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
    else if (req.url === "/blog/titulo-3") {
    const topo = lerArquivo(path.join(ROOT, "partials", "header.html"));
    const pagina = lerArquivo(path.join(ROOT, "pages", "blog-titulo-3.html"));
    const rodape = lerArquivo(path.join(ROOT, "partials", "footer.html"));

    const html = topo + pagina + rodape;

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    return res.end(html);
  }
  res.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end("Pagina não encontada");
});
server.listen(3000, () => {
  console.log("servidor rodando em http//localhost:3000");
});
