const pizzas = [
    {id: 0,quantidade: 1, sabor:"Calabresa", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela","Calabresa","Oregano"]},
    {id: 1,quantidade: 1, sabor:"Frango com Cheddar ", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Frango", "Cheeda", "Oregano"]},
    {id: 2,quantidade: 1, sabor:"Calabresa com Catupiry", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:22.99, preco1: 27.99, preco2:47.99, ingredientes:["Molho", "Mussarela", "Calabresa", "Catupiry"]},
    {id: 3,quantidade: 1, sabor:"Portuguesa", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Presunto", "Tomate", "Pimentão", "Ovo", "Milho", "Ervilha", "Cebola", "Oregano"]},
    {id: 4,quantidade: 1, sabor:"Mista", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Presunto", "Calabresa", "Orégano"]},
    {id: 5,quantidade: 1, sabor:"Tomate", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1: 24.99, preco2:40.00, ingredientes:["Molho", "Mussarela", "Tomate", "Oregano"]},
    {id: 6,quantidade: 1, sabor:"Mussarela", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Oregano"]},
    {id: 7,quantidade: 1, sabor:"4 Queijos", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1: 34.99, preco2:54.99, ingredientes:["Molho", "Mussarela", "Parmesão", "Provolone", "Catupiry", "Oregano"]},
    {id: 8,quantidade: 1, sabor:"Nevada", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1: 29.99, preco2:44.99, ingredientes:["Creme de leite", "Mussarela", "Chocolate branco", "Açucar", "Canela", "Banana"]},
    {id: 9,quantidade: 1, sabor:"Nutela", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1: 34.99, preco2:49.99, ingredientes:["Creme de leite", "Nutela"]},
    {id: 10,quantidade: 1, sabor:"Bacon", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1: 34.99, preco2:54.99, ingredientes:["Molho", "Mussarela", "Bacon", "Ovos", "Oregano"]},
    {id: 11,quantidade: 1, sabor:"Bacon com Catupiry", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1: 37.99, preco2:57.99, ingredientes:["Molho", "Mussarela", "Bacon", "Catupiry", "Oregano"]},
];

const pizzasDoces = [
    {id: 12,quantidade: 1, sabor:"MM", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1:24.99, preco2:44.99, ingredientes:""},
    {id: 13,quantidade: 1, sabor:"Prestígio", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1:24.99, preco2:44.99, ingredientes:""},
    {id: 14,quantidade: 1, sabor:"Doce de Leite", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:20.99, preco1:24.99, preco2:44.99, ingredientes:""},
    {id: 15,quantidade: 1, sabor:"Banana Nevada", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1:29.99, preco2:44.99, ingredientes:""},
    {id: 16,quantidade: 1, sabor:"Amendoim", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1:34.99, preco2:44.99, ingredientes:""},
    {id: 17,quantidade: 1, sabor:"Ovomaltine", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1:34.99, preco2:55.99, ingredientes:""},
    {id: 18,quantidade: 1, sabor:"Romeu e Julieta", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1:34.99, preco2:53.99, ingredientes:"" },
    {id: 19,quantidade: 1, sabor:"Nutela", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:24.99, preco1:34.99, preco2:49.99, ingredientes:""},
    {id: 20,quantidade: 1, sabor:"Brigadeiro", tamanho: "P", tamanho2:"M", tamanho3: "G", preco:19.99, preco1:24.99, preco2:44.99, ingredientes:""}
];

const pizzasVariadas = [...pizzasDoces, ...pizzas];




const bebidas = [
  {id: 21,quantidade: 1, sabor: "Coca-Cola 2L", preco: 14.00, ingredientes:"Geladinha na sua mesa"},
  {id: 22,quantidade: 1, sabor: "Guaraná Antártica 2L", preco: 12.00, ingredientes:"A mais saborosa"}
];






//? RENDERIZANDO TODAS AS PIZZAS
const container = document.getElementById('cardapio-pequenas');

container.innerHTML = pizzas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho} data-quantidade=${item.quantidade} data-preco=${item.preco.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes=${item.ingredientes} />
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

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho2} data-quantidade=${item.quantidade} data-preco=${item.preco1.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes=${item.ingredientes} />
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

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho3} data-quantidade=${item.quantidade} data-preco=${item.preco2.toFixed(2)} data-sabor="${item.sabor}"data-ingredientes=${item.ingredientes} />
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

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho} data-quantidade=${item.quantidade} data-preco=${item.preco.toFixed(2)} data-sabor="${item.sabor}"  />
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

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho2} data-quantidade=${item.quantidade} data-preco=${item.preco1.toFixed(2)} data-sabor="${item.sabor}"/>
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

                  <input data-quantidade=${item.quantidade} data-id="${item.id}" data-tamanho=${item.tamanho3} data-preco=${item.preco2.toFixed(2)} data-sabor="${item.sabor}" type="checkbox" class="w-5 h-5 item"  />
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

                  <input data-quantidade=${item.quantidade} data-id="${item.id}" data-preco=${item.preco.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes="${item.ingredientes}" type="checkbox" class="w-5 h-5 item" />
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


//? RENDERIZANDO TODAS AS PIZZAS-doce e salgada

const variadas = document.getElementById('cardapio-variadas');

variadas.innerHTML = pizzasVariadas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho} data-quantidade=${item.quantidade} data-preco=${item.preco.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes=${item.ingredientes} />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-full">
                      <p class="md:text-lg">${item.sabor}</p>
                    </div>

                    <div class=" w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');

const variadas2 = document.getElementById('cardapio-variadas2');

variadas2.innerHTML = pizzasVariadas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho2} data-quantidade=${item.quantidade} data-preco=${item.preco1.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes=${item.ingredientes} />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-full">
                      <p class="md:text-lg">${item.sabor}</p>
                    </div>

                    <div class=" w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco1.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');

const variadas3 = document.getElementById('cardapio-variadas3');

variadas3.innerHTML = pizzasVariadas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5 item" data-id="${item.id}" data-tamanho=${item.tamanho3} data-quantidade=${item.quantidade} data-preco=${item.preco2.toFixed(2)} data-sabor="${item.sabor}" data-ingredientes=${item.ingredientes} />
                  <div class="flex w-full gap-8 items-center justify-between">
                    <div class="flex flex-col w-full">
                      <p class="md:text-lg">${item.sabor}</p>
                    </div>

                    <div class=" w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco2.toString().replace("." , ",")}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');
///FAZER OS DEMAIS TAMANHOS DAS PIZZAS VARIADAS