const botaoCarrinho = document.getElementById("carrinho");
const card = document.getElementById("card-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");

/*Abrindo carrinho */
botaoCarrinho.addEventListener("click", () => {
    card.classList.remove("hidden")
});

/*Fechando Carrinho */
fecharCarrinho.addEventListener("click", () => {
    card.classList.add("hidden");
});
