const checkboxes = document.querySelectorAll(".item");
const botaoCarrinho = document.getElementById("img-carrinho");
const card = document.getElementById("card-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");
const finalizar = document.getElementById("finalizar");
const carrinhoCompras = document.getElementById("itens-carrinho");
const formEntrega = document.getElementById("card-entrega");
const select = document.getElementById("opcao");
const inputExtra = document.getElementById("campoExtra");
const label = document.getElementById("label-entrega");
const voltarCarrinho = document.getElementById("btn-fechar-entrega");
const produtosDentroDoCarrinho = document.getElementById("lista-carrinho");
const selectPagamento = document.getElementById("pagamento");
const pix = document.getElementById("campoPix");

const carrinho = [];
console.log(carrinho);

/*Abrindo carrinho */
botaoCarrinho.addEventListener("click", () => {
  card.classList.remove("hidden");
  console.log(carrinho);
});

/*Fechando Carrinho */
fecharCarrinho.addEventListener("click", () => {
  card.classList.add("hidden");
  const secao = e.target.closest(".secao");
  
});

/*Só deixa selecionar 2 checkbox */
// const checkbox = document.querySelectorAll(".item");

// checkbox.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     const marcados = document.querySelectorAll(".item:checked");

//     if (marcados.length > 2) {
//       checkbox.checked = false;
//       alert("Você só pode escolher até 2 sabores!");
//     }
//   });
// });


//? Checkbox → capturar + limitar seleção
document.addEventListener("change", (e) => {
  if (!e.target.classList.contains("item")) return;

  const checkbox = e.target;
  const secao = checkbox.closest(".secao");

  const itens = secao.querySelectorAll(".item");
  const selecionados = secao.querySelectorAll(".item:checked");

  // 🔥 captura instantânea
  console.log({
    nome: checkbox.dataset.sabor,
    preco: parseFloat(checkbox.dataset.preco),
    marcado: checkbox.checked
  });

  // 🔒 limita a 2
  if (selecionados.length >= 2) {
    itens.forEach((i) => {
      if (!i.checked) i.disabled = true;
    });
  } else {
    itens.forEach((i) => (i.disabled = false));
  }
});

/*Recuperando os valores dos checkbox */
document.querySelectorAll(".adicionar").forEach((botao) => {
  botao.addEventListener("click", (e) => {
    // 🔥 pega a seção daquele botão
    const secao = e.target.closest(".secao");

    // 🔥 pega só os checkboxes marcados DESSA seção
    const selecionados = Array.from(
      secao.querySelectorAll(".item:checked"),
    ).map((item) => {
      return {
        nome: item.dataset.sabor,
        ingredientes: item.dataset.ingredientes,
        preco: item.dataset.preco,
        quantidade: item.dataset.quantidade,
      };
    });

    // 🚫 evita adicionar vazio
    if (selecionados.length === 0) {
      alert("Selecione pelo menos 1 sabor!");
      return;
    }

    let produtoFinal;

    // 🍕 1 sabor
    if (selecionados.length === 1) {
      produtoFinal = {
        nome: selecionados[0].nome,
        preco: selecionados[0].preco,
        tipo: "inteira",
      };
      selecionados.forEach((item) => carrinho.push(item));
    }

    // 🍕🍕 meio a meio
    if (selecionados.length === 2) {
      const [s1, s2] = selecionados;
      produtoFinal = {
        nome: `${s1.nome} / ${s2.nome}`,
        preco: Math.max(s1.preco, s2.preco), // 🔥 regra do meio a meio
        ingredientes: "meio a meio",
        tamanho: s1.tamanho,
        quantidade: s1.quantidade,
      };
      carrinho.push(produtoFinal);
    }

    //? adiciona no carrinho global

    //? opcional: limpar seleção
    secao.querySelectorAll(".item").forEach((el) => {
      el.checked = false;
      el.disabled = false;
    });

    renderizarCarrinho();
  });
});

//? FUNÇÃO PARA RENDERIZAR NO CARRINHO
function renderizarCarrinho() {
  const container = document.getElementById("lista-carrinho");
  // limpa antes de renderizar
  container.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += Number(item.preco) * item.quantidade;

    let valorTotal = document.getElementById("total");
    valorTotal.innerHTML = total.toFixed(2).toString().replace(".", ",");

    const div = document.createElement("div");
    div.classList.add("item-carrinho");

    div.innerHTML += `
      <div
                class="h-30 md:h-25 gap-2 p-3 md:w-full items-center bg-gray-100 flex flex-col rounded-xl shadow-md cairo"
              >
                <div class="flex justify-between gap-2 text-sm w-full">
                  <div class="flex flex-col h-auto md:w-auto w-30">
                    <p>${item.nome}</p>
                    <p class="text-gray-500">
                      ${item.ingredientes}
                    </p>
                  </div>
                  <button
                    class="h-5 flex justify-center items-center bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    <p>Remover</p>
                  </button>
                </div>

                <div class="flex justify-between w-full gap-2 text-lg">
                  <p class="text-green-500">R$ ${item.preco}</p>
                  <div class="bg-gray-300 rounded-lg px-2 flex gap-2">
                    <button class= "subtract">-</button>
                    <span class="text-green-500 qtd" >${item.quantidade}</span>
                    <button class="add">+</button>
                  </div>
                </div>
              </div>
            </div>
    `;

    container.appendChild(div);
  });
}

//? FUNÇÃO PARA COPIAR O PIX
function copiarPix() {
  const valorInput = document.getElementById("valuePix");
  const chaveCopiada = valorInput.value;
  const copyButton = document.getElementById("copuButton");

  try {
    navigator.clipboard.writeText(chaveCopiada);
    Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon: "success",
      title: "Chave Pix copiada!",
    });
  } catch {}
}

// Mostra uma menssagem se o pagamento for em pix, ou troco se for em dinheiro
selectPagamento.addEventListener("change", () => {
  if (selectPagamento.value === "pix") {
    pix.classList.remove("hidden");
  } else {
    pix.classList.add("hidden");
  }
});

// Abre as opções caso seja para entregar

select.addEventListener("change", () => {
  if (select.value === "entrega") {
    inputExtra.style.display = "block";
    label.style.display = "block";
  } else {
    inputExtra.style.display = "none";
    label.style.display = "none";
    inputExtra.value = ""; // limpa quando esconde
  }
});
//Fim selecionar entrega

// botao finalizar e ir para o form entrega
finalizar.addEventListener("click", () => {
  if (produtosDentroDoCarrinho.innerText === "") {
    Swal.fire({
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      icon: "error",
      title: "Essa não...",
      text: "Parece que seu carrinho está vazio!",
    });
  } else {
    formEntrega.classList.remove("hidden");
    card.classList.add("hidden");
    Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon: "success",
      title: "Ir para Entrega!",
    });
    console.log(carrinho);
  }
});

//? FUNÇÃO IR PARA ENTREGA
function dadosEntrega() {}

//? VOLTAR PARA O CARRINHO
voltarCarrinho.addEventListener("click", () => {
  formEntrega.classList.add("hidden");
  card.classList.remove("hidden");
});
