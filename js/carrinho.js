const botaoCarrinho = document.getElementById("carrinho");
const card = document.getElementById("card-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");
const finalizar = document.querySelector("#finalizar");

/*Abrindo carrinho */
botaoCarrinho.addEventListener("click", () => {
    card.classList.remove("hidden")
});

/*Fechando Carrinho */
fecharCarrinho.addEventListener("click", () => {
    card.classList.add("hidden");
});