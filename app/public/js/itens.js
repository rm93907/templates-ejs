document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.querySelector(".btn-add");

  if (btnAdd) {
    btnAdd.addEventListener("click", () => {
      const nome = document.querySelector("h1").innerText.trim();
      const precoTexto = document.querySelector(".preco-novo").innerText;
      const preco = parseFloat(precoTexto.replace(/[^\d,]/g, "").replace(",", "."));
      const imagem = document.querySelector(".imagem-principal img").src;

      const item = {
        nome,
        preco,
        imagem,
        quantidade: 1,
      };

      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      const existente = carrinho.find((p) => p.nome === nome);
      if (existente) {
        existente.quantidade++;
      } else {
        carrinho.push(item);
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      // Notificação customizada
      mostrarNotificacao("Produto adicionado ao carrinho!", "✅");
    });
  }

  // Função de notificação (custom alert)
  function mostrarNotificacao(mensagem, icone = "✅") {
    let notificacao = document.getElementById("notificacao");

    // Cria o elemento se não existir
    if (!notificacao) {
      notificacao = document.createElement("div");
      notificacao.id = "notificacao";
      notificacao.className = "notificacao";
      notificacao.innerHTML = `
        <span class="icone">${icone}</span>
        <p id="mensagem">${mensagem}</p>
      `;
      document.body.appendChild(notificacao);
    } else {
      notificacao.querySelector(".icone").textContent = icone;
      notificacao.querySelector("#mensagem").textContent = mensagem;
    }

    notificacao.classList.add("mostrar");

    setTimeout(() => {
      notificacao.classList.remove("mostrar");
    }, 2500); // some após 2,5 segundos
  }
});
