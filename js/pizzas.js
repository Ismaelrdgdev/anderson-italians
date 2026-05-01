const abrirPizzasPq = document.getElementById("pizza-pq");
const cardPizzasPq = document.getElementById("card-pizza-pq");
const botaoFecharPizzaPequena = document.getElementById("btn-fechar-pizza-pq");

const abrirPizzasMd = document.getElementById("pizza-md");
const cardPizzasMd = document.getElementById("card-pizza-md");
const botaoFecharPizzaMedia = document.getElementById("btn-fechar-pizza-md");

const abrirPizzasGd = document.getElementById("pizza-gd");
const cardPizzasGd = document.getElementById("card-pizza-gd");
const botaoFecharPizzaGrande = document.getElementById("btn-fechar-pizza-gd");



/*Abrindo modal de pizza pequena */
abrirPizzasPq.addEventListener("click", () => {
    cardPizzasPq.classList.remove("hidden");
});

/*Fechando modal de pizza pequena */
botaoFecharPizzaPequena.addEventListener("click", () => {
        cardPizzasPq.classList.add("hidden");
});


/*Abrindo modal de pizza média */
abrirPizzasMd.addEventListener("click", () => {
    cardPizzasMd.classList.remove("hidden");
});

/*Fechando modal de pizza média */
botaoFecharPizzaMedia.addEventListener("click", () => {
        cardPizzasMd.classList.add("hidden");
});

/*Abrindo modal de pizza grande */
abrirPizzasGd.addEventListener("click", () => {
    cardPizzasGd.classList.remove("hidden");
});

/*Fechando modal de pizza grande */
botaoFecharPizzaGrande.addEventListener("click", () => {
        cardPizzasGd.classList.add("hidden");
});


