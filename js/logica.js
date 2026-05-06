// document.addEventListener("change", (e) => {
//   if (!e.target.classList.contains("item")) return;

//   const checkbox = e.target;
//   const secao = checkbox.closest(".secao");

//   const itens = secao.querySelectorAll(".item");
//   const selecionados = secao.querySelectorAll(".item:checked");

//   // 🔥 captura instantânea
//   console.log({
//     nome: checkbox.dataset.nome,
//     preco: parseFloat(checkbox.dataset.preco),
//     marcado: checkbox.checked
//   });

//   // 🔒 limita a 2
//   if (selecionados.length >= 2) {
//     itens.forEach((i) => {
//       if (!i.checked) i.disabled = true;
//     });
//   } else {
//     itens.forEach((i) => (i.disabled = false));
//   }
// });

// const carrinho = [];

// document.querySelectorAll(".adicionar").forEach((botao) => {
//   botao.addEventListener("click", (e) => {
//     const secao = e.target.closest(".secao");

//     const selecionados = Array.from(
//       secao.querySelectorAll(".item:checked")
//     ).map((item) => ({
//       nome: item.dataset.nome,
//       preco: item.dataset.preco
//     }));

//     if (selecionados.length === 0) {
//       alert("Selecione pelo menos 1 sabor!");
//       return;
//     }

//     let produtoFinal;

//     // 🍕 1 sabor
//     if (selecionados.length === 1) {
//       produtoFinal = {
//         nome: selecionados[0].nome,
//         preco: selecionados[0].preco,
//         tipo: "inteira",
//       };
//     }

//     // 🍕🍕 meio a meio
//     if (selecionados.length === 2) {
//       const [s1, s2] = selecionados;

//       produtoFinal = {
//         nome: `${s1.nome} / ${s2.nome}`,
//         preco: Number(s1.preco + s2.preco), // 🔥 regra do meio a meio
//         tipo: "meio a meio",
//         sabores: [s1.nome, s2.nome],
//       };
//     }

//     carrinho.push(produtoFinal);

//     console.log("Carrinho:", carrinho);

//     // 🔄 reset
//     secao.querySelectorAll(".item").forEach((el) => {
//       el.checked = false;
//       el.disabled = false;
//     });

//     renderizarCarrinho();
//   });
// });