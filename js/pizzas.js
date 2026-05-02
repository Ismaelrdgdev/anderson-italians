const abrirPizzasPq = document.getElementById("pizza-pq");
const cardPizzasPq = document.getElementById("card-pizza-pq");
const botaoFecharPizzaPequena = document.getElementById("btn-fechar-pizza-pq");

const abrirPizzasMd = document.getElementById("pizza-md");
const cardPizzasMd = document.getElementById("card-pizza-md");
const botaoFecharPizzaMedia = document.getElementById("btn-fechar-pizza-md");

const abrirPizzasGd = document.getElementById("pizza-gd");
const cardPizzasGd = document.getElementById("card-pizza-gd");
const botaoFecharPizzaGrande = document.getElementById("btn-fechar-pizza-gd");


/*Doces */
const abrirPizzasDocePq = document.getElementById("pizza-doce-pq");
const cardPizzasDocePq = document.getElementById("card-pizza-doce-pq");
const botaoFecharPizzaDocePequena = document.getElementById("btn-fechar-pizza-doce-pq");

const abrirPizzasDoceMd = document.getElementById("pizza-doce-md");
const cardPizzasDoceMd = document.getElementById("card-pizza-doce-md");
const botaoFecharPizzaDoceMedia = document.getElementById("btn-fechar-pizza-doce-md");

const abrirPizzasDoceGd = document.getElementById("pizza-doce-gd");
const cardPizzasDoceGd = document.getElementById("card-pizza-doce-gd");
const botaoFecharPizzaDoceGrande = document.getElementById("btn-fechar-pizza-doce-gd");

/*Bebidas */
const abrirBebidas = document.getElementById("bebidas");
const cardBebidas = document.getElementById("card-bebidas");
const botaoFecharBebidas = document.getElementById("btn-fechar-bebidas");

document.querySelectorAll(".abrirModal").forEach((card)=>{
    card.addEventListener("click", (event)=>{
        event.classList.remove("hidden");
        console.log("Ismael");
        
    })
})

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

/*Pizzas doces */

/*Abrindo modal de pizza doce pequena */
abrirPizzasDocePq.addEventListener("click", () => {
    cardPizzasDocePq.classList.remove("hidden");
});

/*Fechando modal de pizza doce pequena */
botaoFecharPizzaDocePequena.addEventListener("click", () => {
        cardPizzasDocePq.classList.add("hidden");
});

/*Abrindo modal de pizza doce média */
abrirPizzasDoceMd.addEventListener("click", () => {
    cardPizzasDoceMd.classList.remove("hidden");
});

/*Fechando modal de pizza doce média */
botaoFecharPizzaDoceMedia.addEventListener("click", () => {
        cardPizzasDoceMd.classList.add("hidden");
});

/*Abrindo modal de pizza doce grande */
abrirPizzasDoceGd.addEventListener("click", () => {
    cardPizzasDoceGd.classList.remove("hidden");
});

/*Fechando modal de pizza doce grande */
botaoFecharPizzaDoceGrande.addEventListener("click", () => {
        cardPizzasDoceGd.classList.add("hidden");
});

/*Abrindo modal de bebidas */
abrirBebidas.addEventListener("click", () => {
    cardBebidas.classList.remove("hidden");
});

/*Fechando modal de bebidas */
botaoFecharBebidas.addEventListener("click", () => {
        cardBebidas.classList.add("hidden");
});

