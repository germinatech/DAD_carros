// transformando a nodelist em array para obter os metodos de array
const veiculos = Array.from(document.querySelectorAll(".card-veiculo"));

// lista de veiculos inicial para cada um dos filtros
let veiculosFiltradosNome = veiculos;
let veiculosFiltradosMarca = veiculos;
let veiculosFiltradosCombustivel = veiculos;
let veiculosFiltradosCambio = veiculos;
let veiculosFiltradosAr = veiculos;

// adicionando evento de busca para o botao
const botaoCompra = document.querySelector("#botao-busca");
botaoCompra.addEventListener("click", buscaNome);

// adicionando evento ao campo de marca
const marca = document.querySelector("#marca");
marca.addEventListener("change", filtraMarca);

// adicionando evento ao campo de combustivel
const combustivel = document.querySelector("#combustivel");
combustivel.addEventListener("change", filtraCombustivel);

// adicionando evento aos radio buttons
const cambios = document.getElementsByName("cambio");
cambios[0].addEventListener("change", filtrarCambio);
cambios[1].addEventListener("change", filtrarCambio);

// adicionando evento ao checkbox
const arCondicionado = document.getElementsByName("ar")[0];
arCondicionado.addEventListener("change", filtraAr);
