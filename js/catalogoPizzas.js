const pizzas = [
    {sabor:"Calabresa", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela","Calabresa","Oregano"]},
    {sabor:"Calabresa com Catupiry", preco:22.99, preco1: 27.99, preco2:47.99, ingredientes:["Molho", "Mussarela", "Calabresa", "Catupiry"]},
    {sabor:"Frango com Cheeda ", preco:24.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Frango", "Cheeda", "Oregano"]},
    {sabor:"Portuguesa", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Presunto", "Tomate", "Pimentão", "Ovo", "Milho", "Ervilha", "Cebola", "Oregano"]},
    {sabor:"Mista", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Presunto", "Calabresa", "Orégano"]},
    {sabor:"Tomate", preco:19.99, preco1: 24.99, preco2:40.00, ingredientes:["Molho", "Mussarela", "Tomate", "Oregano"]},
    {sabor:"Mussarela", preco:19.99, preco1: 24.99, preco2:44.99, ingredientes:["Molho", "Mussarela", "Oregano"]},
    {sabor:"4 Queijos", preco:24.99, preco1: 34.99, preco2:54.99, ingredientes:["Molho", "Mussarela", "Parmesão", "Provolone", "Catupiry", "Oregano"]},
    {sabor:"Nevada", preco:24.99, preco1: 29.99, preco2:44.99, ingredientes:["Creme de leite", "Mussarela", "Chocolate branco", "Açucar", "Canela", "Banana"]},
    {sabor:"Nutela",preco:24.99, preco1: 34.99, preco2:49.99, ingredientes:["Creme de leite", "Nutela"]},
    {sabor:"Bacon", preco:24.99, preco1: 34.99, preco2:54.99, ingredientes:["Molho", "Mussarela", "Bacon", "Ovos", "Oregano"]},
    {sabor:"Bacon com Catupiry", preco:24.99, preco1: 37.99, preco2:57.99, ingredientes:["Molho", "Mussarela", "Bacon", "Catupiry", "Oregano"]}
];

const container = document.getElementById('cardapio-pequenas');

container.innerHTML = pizzas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5" />
                  <div class="flex md:w-full md:gap-8 items-center justify-between">
                    <div class="flex flex-col w-full">
                      <p class="md:text-lg">${item.sabor}</p>
                      <p class="text-gray-500">
                        ${item.ingredientes.join(", ")}
                      </p>
                    </div>

                    <div class=" w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');


const container1 = document.getElementById("cardapio-medias");

container1.innerHTML = pizzas.map(item => `
  <div class="h-20 md:h-20 md:w-full items-center bg-gray-100 flex rounded-xl shadow-md cairo"
              >
                <div class="m-2 flex items-center w-full gap-3 text-sm">

                  <input type="checkbox" class="w-5 h-5" />
                  <div class="flex md:w-full md:gap-8 items-center justify-between">
                    <div class="flex flex-col">
                      <p class="md:text-lg">${item.sabor}</p>
                      <p class="text-gray-500">
                        ${item.ingredientes.join(", ")}
                      </p>
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco1.toFixed(2)}</p>
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

                  <input type="checkbox" class="w-5 h-5" />
                  <div class="flex md:w-full md:gap-8 items-center justify-between">
                    <div class="flex flex-col">
                      <p class="md:text-lg">${item.sabor}</p>
                      <p class="text-gray-500">
                        ${item.ingredientes.join(", ")}
                      </p>
                    </div>

                    <div class="w-30">
                      <p class="text-green-500 md:text-lg">R$ ${item.preco2.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
`).join('');