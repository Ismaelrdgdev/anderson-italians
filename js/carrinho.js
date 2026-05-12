const checkboxes = document.querySelectorAll(".item");
const botaoCarrinho = document.getElementById("img-carrinho");
const card = document.getElementById("card-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");
const finalizar = document.getElementById("finalizar");
const carrinhoCompras = document.getElementById("itens-carrinho");
const formEntrega = document.getElementById("card-entrega");
const select = document.getElementById("opcao");
const inputExtra = document.getElementById("campoExtra");
const numero = document.getElementById("numero");
const label = document.getElementById("label-entrega");
const voltarCarrinho = document.getElementById("btn-fechar-entrega");
const produtosDentroDoCarrinho = document.getElementById("lista-carrinho");
const selectPagamento = document.getElementById("pagamento");
const pix = document.getElementById("campoPix");
const cartItemsContainer = document.getElementById("lista-carrinho");

const carrinho = [];


/*Abrindo carrinho */
botaoCarrinho.addEventListener("click", () => {
  card.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

/*Fechando Carrinho */
fecharCarrinho.addEventListener("click", () => {
  card.classList.add("hidden");
  document.body.style.overflow = "auto";
  
});







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
    marcado: checkbox.checked,
    id: checkbox.dataset.id,
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
        id: Date.now() + Math.random(),
        tamanho: item.dataset.tamanho,
      };
    });

    // 🚫 evita adicionar vazio
    if (selecionados.length === 0) {
      alert("Selecione pelo menos 1 sabor!");
      return;
    }
    const cartao = document.querySelectorAll(".cartao");
    let produtoFinal;

    // 🍕 1 sabor
    if (selecionados.length === 1) {
      produtoFinal = {
        nome: selecionados[0].nome,
        preco: selecionados[0].preco,
        tipo: "inteira",
        id: selecionados[0].id,
        tamanho: selecionados[0].tamanho,
      };
      selecionados.forEach((item) => carrinho.push(item));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Produto adicionado ao carrinho!",
        showConfirmButton: false,
        timer: 1500,
      });
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
        id: s1.id,
      };

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Produto adicionado ao carrinho!",
        showConfirmButton: false,
        timer: 1500,
      });
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

function renderizarCarrinho() {
  const container = document.getElementById("lista-carrinho");
  const qtdNoCarrinho = document.querySelector(".qtdNoCarrinho");
  qtdNoCarrinho.innerHTML = carrinho.length;

  container.innerHTML = "";

  let total = 0;

  carrinho.forEach((item, index) => {
    total += Number(item.preco) * item.quantidade;

    const div = document.createElement("div");

    div.classList.add("item-carrinho");

    div.innerHTML = `
    
      <div
        class="h-30 md:h-25 gap-2 p-3 md:w-full items-center bg-gray-100 flex flex-col rounded-xl shadow-md cairo"
      >

        <div class="flex justify-between gap-2 text-sm w-full">

          <div class="flex flex-col h-auto md:w-auto w-50">
            <p>${item.nome}</p>

            
          </div>

          <button
            data-id="${item.id}"
            class="h-5 flex justify-center items-center bg-red-500 text-white px-2 py-1 rounded-lg remover"
          >
            Remover
          </button>

        </div>

        <div class="flex justify-between w-full gap-2 text-lg">

          <p class="text-green-500">
            R$ ${item.preco}
          </p>

          <div class="bg-gray-300 rounded-lg px-2 flex gap-2">

            <button class="subtract" data-id="${item.id}">
              -
            </button>

            <span class="text-green-500 qtd">
              ${item.quantidade}
            </span>

            <button class="add" data-id="${item.id}">
              +
            </button>

          </div>

        </div>

      </div>

    `;

    container.appendChild(div);


  });

  // ATUALIZA O TOTAL UMA ÚNICA VEZ
  const valorTotal = document.getElementById("total");
  
  valorTotal.innerHTML = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });


}

//? FUNÇÃO PARA REMOVER DO CARRINHO
//Função para remover item do carrinho
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remover")) {
    const id = Number(e.target.dataset.id);

    const index = carrinho.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) {
      carrinho.splice(index, 1);
      Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      }).fire({
        icon: "success",
        title: "Produto removido!",
      });
    }

    renderizarCarrinho();
  }
});

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
  } catch {
    console.error("Ocorreu algum erro!");
  }
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
    numero.style.display = "block";
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
      title: "Preencha os dados da entrega!",
    });
    
  }
});

//? VOLTAR PARA O CARRINHO
voltarCarrinho.addEventListener("click", () => {
  formEntrega.classList.add("hidden");
  card.classList.remove("hidden");
});

document.addEventListener("click", (e) => {
  // AUMENTAR QUANTIDADE
  if (e.target.classList.contains("add")) {
    const id = Number(e.target.dataset.id);

    const produto = carrinho.find((item) => {
      return item.id === id;
    });

    if (produto) {
      produto.quantidade++;
    }

    renderizarCarrinho();
  }
});

document.addEventListener("click", (e) => {
  // DIMINUIR QUANTIDADE
  if (e.target.classList.contains("subtract")) {
    const id = Number(e.target.dataset.id);

    const produto = carrinho.find((item) => {
      return item.id === id;
    });

    if (produto && produto.quantidade > 1) {
      produto.quantidade--;
    }

    renderizarCarrinho();
  }
});

const enviarPedido = document.getElementById("enviarPedido");

enviarPedido.addEventListener("click", () => {
  

  const nome = document.getElementById("nome").value.trimEnd();
  if (nome === "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Você precisa informar seu nome!",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  const telefoneCelular = document.getElementById("numero").value;
  if (telefoneCelular === "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Você precisa informar seu telefone!",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  const opcaoEntrega = document.getElementById("opcao").value;
  

  if (opcaoEntrega === "Entrega/Retirada") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Você precisa informar se é Entrega ou Retirada",
      showConfirmButton: false,
      timer: 1500,
    });

    return;
  }

  const entrega = document.getElementById("campoExtra").value.trimEnd();
  
  if (opcaoEntrega === "entrega" && entrega === "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Você precisa Informar seu endereço!",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  

  const pagamento = document.getElementById("pagamento").value;
  
  if(pagamento === "Pagamento 🤑"){
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Informe um pagamento!",
      showConfirmButton: false,
      timer: 1500,
    });
    return
  }

  let mensagem = `🍕 *NOVO PEDIDO* \n\n`;

  mensagem += `👤 _Cliente:_ *${nome}*\n`;

  mensagem += `♾️ _Entrega ou Retirada ?_ *${opcaoEntrega}*\n`;

  mensagem += `🏠 _Endereço_  *${entrega}*\n`;

  mensagem += `💵 _Pagamento:_ *${pagamento}*\n\n`;
  
  mensagem += `🛒 *ITENS DO PEDIDO*\n\n `;
  
  let total = 0;
  if (opcaoEntrega === "entrega"){
      total += 5;
      mensagem += `🛵 _Frete:_ R$ 5,00 \n`
    }

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;

    total += subtotal;

    

    mensagem += `
🍕 ${item.nome}
📏 Tamanho: ${item.tamanho}
🔢 Quantidade: ${item.quantidade}
💰 Valor: R$ ${subtotal.toFixed(2).replace(".", ",")}

`;
  });

  mensagem += `_Tempo de entrega_: 30~45 minutos`;

  mensagem += `\n💵 *TOTAL: R$ ${total.toFixed(2).replace(".", ",")}*`;

  const telefone = "5521981824955";

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});