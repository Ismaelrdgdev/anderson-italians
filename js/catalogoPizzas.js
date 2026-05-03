const pizzas = [
    {quantidade: 1, sabor:"Calabresa", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela","Calabresa","Oregano"]},
    {quantidade: 1, sabor:"Calabresa com Catupiry", preco:22.99, preco1: 27.99, preco2:47.99, ingredientes:["Molho", "Mussarela", "Calabresa", "Catupiry"]},
    {quantidade: 1, sabor:"Frango com Cheeda ", preco:24.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Frango", "Cheeda", "Oregano"]},
    {quantidade: 1, sabor:"Portuguesa", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Presunto", "Tomate", "Pimentão", "Ovo", "Milho", "Ervilha", "Cebola", "Oregano"]},
    {quantidade: 1, sabor:"Mista", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Presunto", "Calabresa", "Orégano"]},
    {quantidade: 1, sabor:"Tomate", preco:19.99, preco1: 24.99, preco2:40.00, ingredientes:["Molho", "Mussarela", "Tomate", "Oregano"]},
    {quantidade: 1, sabor:"Mussarela", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Oregano"]},
    {quantidade: 1, sabor:"4 Queijos", preco:24.99, preco1: 34.99, preco2:54.99, ingredientes:["Molho", "Mussarela", "Parmesão", "Provolone", "Catupiry", "Oregano"]},
    {quantidade: 1, sabor:"Nevada", preco:24.99, preco1: 29.99, preco2:44.99, ingredientes:["Creme de leite", "Mussarela", "Chocolate branco", "Açucar", "Canela", "Banana"]},
    {quantidade: 1, sabor:"Nutela",preco:24.99, preco1: 34.99, preco2:49.99, ingredientes:["Creme de leite", "Nutela"]},
    {quantidade: 1, sabor:"Bacon", preco:24.99, preco1: 34.99, preco2:54.99, ingredientes:["Molho", "Mussarela", "Bacon", "Ovos", "Oregano"]},
    {quantidade: 1, sabor:"Bacon com Catupiry", preco:24.99, preco1: 37.99, preco2:57.99, ingredientes:["Molho", "Mussarela", "Bacon", "Catupiry", "Oregano"]},
];

const pizzasDoces = [
  {quantidade: 1, sabor:"MM", preco:19.99, preco1:24.99, preco2:44.99},
    {quantidade: 1, sabor:"Prestígio", preco:19.99, preco1:24.99, preco2:44.99},
    {quantidade: 1, sabor:"Doce de Leite", preco:20.99, preco1:24.99, preco2:44.99},
    {quantidade: 1, sabor:"Banana Nevada", preco:24.99, preco1:29.99, preco2:44.99},
    {quantidade: 1, sabor:"Amendoim", preco:24.99, preco1:34.99, preco2:44.99},
    {quantidade: 1, sabor:"Ovomaltine", preco:24.99, preco1:34.99, preco2:55.99},
    {quantidade: 1, sabor:"Romeu e Julieta", preco:24.99, preco1:34.99, preco2:53.99 },
    {quantidade: 1, sabor:"Nutela", preco:24.99, preco1:34.99, preco2:49.99},
    {quantidade: 1, sabor:"Brigadeiro", preco:19.99, preco1:24.99, preco2:44.99}
]


const bebidas = [
  {quantidade: 1, sabor: "Coca-Cola 2L", preco: 14.00, ingredientes:"Geladinha na sua mesa"},
  {quantidade: 1, sabor: "Guaraná Antártica 2L", preco: 12.00, ingredientes:"A mais saborosa"},
  {quantidade: 1, sabor: "Kuat", preco: 8.00, ingredientes:"Tradicional com o mesmo sabor"},
  {quantidade: 1, sabor: "Sukita", preco: 8.00, ingredientes:"Combina com o seu pedido"}
];






//? RENDERIZANDO TODAS AS PIZZAS
const container = document.getElementById('cardapio-pequenas');

container.innerHTML = pizzas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-quantidade=${item.quantidade} data-preco=${item.preco.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes=${item.ingredientes} />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-full">
                      <p class="md:text-lg">${item.sabor}</p>
                      <p class="text-gray-500">
                        ${item.ingredientes.join(", ")}
                      </p>
                    </div>

                    <div class=" w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');


const container1 = document.getElementById("cardapio-medias");

container1.innerHTML = pizzas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm mb-2">

                  <input type="checkbox" class="w-5 h-5 item" data-quantidade=${item.quantidade} data-preco=${item.preco1.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes=${item.ingredientes} />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-[80%]">
                      <p class="md:text-lg">${item.sabor}</p>
                      <p class="text-gray-500">
                        ${item.ingredientes.join(", ")}
                      </p>
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco1.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');

const container2 = document.getElementById("cardapio-grandes");

container2.innerHTML = pizzas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-quantidade=${item.quantidade} data-preco=${item.preco2.toFixed(2)} data-sabor="${item.sabor}"data-ingredientes=${item.ingredientes} />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-[80%]">
                      <p class="md:text-lg">${item.sabor}</p>
                      <p class="text-gray-500">
                        ${item.ingredientes.join(", ")}
                      </p>
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco2.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');

/*Doces */

const container3 = document.getElementById("cardapio-doce-pequenas");

container3.innerHTML = pizzasDoces.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-quantidade=${item.quantidade} data-preco=${item.preco.toFixed(2)} data-sabor="${item.sabor}"  />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-[80%]">
                      <p class="md:text-lg">${item.sabor}</p>
                      
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');

const container4 = document.getElementById("cardapio-doce-medias");

container4.innerHTML = pizzasDoces.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-quantidade=${item.quantidade} data-preco=${item.preco1.toFixed(2)} data-sabor="${item.sabor}"/>
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-[80%]">
                      <p class="md:text-lg">${item.sabor}</p>
                      
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco1.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');

const container5 = document.getElementById("cardapio-doce-grandes");

container5.innerHTML = pizzasDoces.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input data-quantidade=${item.quantidade} data-preco=${item.preco2.toFixed(2)} data-sabor="${item.sabor}" type="checkbox" class="w-5 h-5 item"  />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-[80%]">
                      <p class="md:text-lg">${item.sabor}</p>
                      
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco2.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');

const refri = document.getElementById("catalogo-bebidas");

refri.innerHTML = bebidas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm ">

                  <input data-quantidade=${item.quantidade} data-preco=${item.preco.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes="${item.ingredientes}" type="checkbox" class="w-5 h-5 item" />
                  <div class= "flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-[80%]">
                      <p class="text-lg">${item.sabor}</p>
                      
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 text-lg">R$ ${item.preco.toFixed(2).toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');