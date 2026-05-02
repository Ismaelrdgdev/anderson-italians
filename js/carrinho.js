const checkboxes = document.querySelectorAll(".item");
const botaoCarrinho = document.getElementById("img-carrinho");
const card = document.getElementById("card-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");
const finalizar = document.getElementById("finalizar");
const carrinhoCompras = document.getElementById("itens-carrinho");
const carrinho = [];





// botao finalizar
finalizar.addEventListener("click", () => {
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  }).fire({
    icon: "success",
    title: "Ir para pedido!",
  });
});

/*Botão adicionar */

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {

    const marcados = document.querySelectorAll(".item:checked");

    if (marcados.length === 2) {
      checkboxes.forEach((cb) => {
        if (!cb.checked) {
          cb.disabled = true;
        }
      });
    } else {
      checkboxes.forEach((cb) => {
        cb.disabled = false;
      });
    }

  });
});


// selecionar entrega
const select = document.getElementById("opcao");
const inputExtra = document.getElementById("campoExtra");
const label = document.getElementById("label-entrega");

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

/*Abrindo carrinho */
botaoCarrinho.addEventListener("click", () => {
  card.classList.remove("hidden");
});

/*Fechando Carrinho */
fecharCarrinho.addEventListener("click", () => {
  card.classList.add("hidden");
});

/*Recuperando os valores dos checkbox */
document.querySelectorAll(".adicionar").forEach((botao) => {
  botao.addEventListener("click", (e) => {
    // 🔥 pega a seção daquele botão
    const secao = e.target.closest(".secao");
    

    // 🔥 pega só os checkboxes marcados DESSA seção
    const selecionados = Array.from(
      secao.querySelectorAll(".item:checked")
    ).map((item) => {
      console.log(secao);
      
      return {
        nome: item.dataset.sabor,
        ingredientes: item.dataset.ingredientes,
        preco: item.dataset.preco, 
        quantidade: item.dataset.quantidade
        
    
      };
    });
    
    //? adiciona no carrinho global
    selecionados.forEach(item => carrinho.push(item));


    //? opcional: limpar seleção
    secao.querySelectorAll(".item").forEach(el => el.checked = false);

    
//? FUNÇÃO PARA RENDERIZAR NO CARRINHO

  function renderizarCarrinho() {
  const container = document.getElementById("lista-carrinho");
  // limpa antes de renderizar
  container.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += Number(item.preco) * item.quantidade;
    
    let valorTotal = document.getElementById("total")
    valorTotal.innerHTML = total.toFixed(2).toString().replace(".", ",")


    const div = document.createElement("div");
    div.classList.add("item-carrinho");

    div.innerHTML += `
      <div
                class="h-30 md:h-25 gap-2 p-3 md:w-full items-center bg-gray-100 flex flex-col rounded-xl shadow-md cairo"
              >
                <div class="flex justify-between gap-2 text-sm w-full">
                  <div class="flex flex-col h-auto w-30">
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
                    <span class="text-green-500">${item.quantidade}</span>
                    <button class="add">+</button>
                  </div>
                </div>
              </div>
            </div>
    `;
    
   
    container.appendChild(div);
  });

  
}

renderizarCarrinho()

    });
  });


  //? aumentar com os inputs
document.querySelectorAll(".subtract")
