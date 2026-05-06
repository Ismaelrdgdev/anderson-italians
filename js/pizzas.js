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

const abrirPizzasVariadas = document.getElementById("pizza-variadas");
const cardPizzasVariadas = document.getElementById("card-pizza-variadas");
const botaoFecharPizzaVariadas = document.getElementById("btn-fechar-pizza-variadas");

const abrirPizzasVariadas2 = document.getElementById("pizza-variadas2");
const cardPizzasVariadas2 = document.getElementById("card-pizza-variadas2");
const botaoFecharPizzaVariadas2 = document.getElementById("btn-fechar-pizza-variadas2");

const abrirPizzasVariadas3 = document.getElementById("pizza-variadas3");
const cardPizzasVariadas3 = document.getElementById("card-pizza-variadas3");
const botaoFecharPizzaVariadas3 = document.getElementById("btn-fechar-pizza-variadas3");





/*Bebidas */
const abrirBebidas = document.getElementById("bebidas");
const cardBebidas = document.getElementById("card-bebidas");
const botaoFecharBebidas = document.getElementById("btn-fechar-bebidas");

document.querySelectorAll(".abrirModal").forEach((card)=>{
    card.addEventListener("click", (event)=>{
        event.classList.remove("hidden");
        
    })
})

/*Abrindo modal de pizza pequena */
abrirPizzasPq.addEventListener("click", () => {
    cardPizzasPq.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

/*Fechando modal de pizza pequena */
botaoFecharPizzaPequena.addEventListener("click", () => {
        cardPizzasPq.classList.add("hidden");
        document.body.style.overflow = "auto";
});


/*Abrindo modal de pizza média */
abrirPizzasMd.addEventListener("click", () => {
    cardPizzasMd.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

/*Fechando modal de pizza média */
botaoFecharPizzaMedia.addEventListener("click", () => {
        cardPizzasMd.classList.add("hidden");
        document.body.style.overflow = "auto";
});

/*Abrindo modal de pizza grande */
abrirPizzasGd.addEventListener("click", () => {
    cardPizzasGd.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

/*Fechando modal de pizza grande */
botaoFecharPizzaGrande.addEventListener("click", () => {
        cardPizzasGd.classList.add("hidden");
        document.body.style.overflow = "auto";
});

/*Pizzas doces */

/*Abrindo modal de pizza doce pequena */
abrirPizzasDocePq.addEventListener("click", () => {
    cardPizzasDocePq.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

/*Fechando modal de pizza doce pequena */
botaoFecharPizzaDocePequena.addEventListener("click", () => {
        cardPizzasDocePq.classList.add("hidden");
        document.body.style.overflow = "auto";
});

/*Abrindo modal de pizza doce média */
abrirPizzasDoceMd.addEventListener("click", () => {
    cardPizzasDoceMd.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

/*Fechando modal de pizza doce média */
botaoFecharPizzaDoceMedia.addEventListener("click", () => {
        cardPizzasDoceMd.classList.add("hidden");
        document.body.style.overflow = "auto";
});

/*Abrindo modal de pizza doce grande */
abrirPizzasDoceGd.addEventListener("click", () => {
    cardPizzasDoceGd.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

/*Fechando modal de pizza doce grande */
botaoFecharPizzaDoceGrande.addEventListener("click", () => {
        cardPizzasDoceGd.classList.add("hidden");
        document.body.style.overflow = "auto";
});

/*Abrindo modal de bebidas */
abrirBebidas.addEventListener("click", () => {
    cardBebidas.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

/*Fechando modal de bebidas */
botaoFecharBebidas.addEventListener("click", () => {
        cardBebidas.classList.add("hidden");
        document.body.style.overflow = "auto";
});

/*Abrindo modal de pizza variadas */
abrirPizzasVariadas.addEventListener("click", () => {
    cardPizzasVariadas.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    
});

/*Fechando modal de pizza variadas */
botaoFecharPizzaVariadas.addEventListener("click", () => {
        cardPizzasVariadas.classList.add("hidden");
        document.body.style.overflow = "auto";
});

/*Abrindo modal de pizza variadas2 */
abrirPizzasVariadas2.addEventListener("click", () => {
    cardPizzasVariadas2.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    
});

/*Fechando modal de pizza variadas2 */
botaoFecharPizzaVariadas2.addEventListener("click", () => {
        cardPizzasVariadas2.classList.add("hidden");
        document.body.style.overflow = "auto";
});
/*Abrindo modal de pizza variadas3 */
abrirPizzasVariadas3.addEventListener("click", () => {
    cardPizzasVariadas3.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    
});

/*Fechando modal de pizza variadas3 */
botaoFecharPizzaVariadas3.addEventListener("click", () => {
        cardPizzasVariadas3.classList.add("hidden");
        document.body.style.overflow = "auto";
});



