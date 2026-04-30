const abrirPizzasPq = document.getElementById("pizza-pq");
const cardPizzasPq = document.getElementById("card-pizza-pq");
const botaoFecharPizzaPequena = document.getElementById("btn-fechar-pizza-pq");

/*Abrindo modal de pizza pequena */
abrirPizzasPq.addEventListener("click", () => {
    cardPizzasPq.classList.remove("hidden");
});

/*Fechando modal de pizza pequena */
botaoFecharPizzaPequena.addEventListener("click", () => {
        cardPizzasPq.classList.add("hidden");
});