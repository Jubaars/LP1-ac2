let listaDeCompras = ["Arroz", "Feijão", "Carne"];
let novosItens = ["Tomate", "Alface", "Cenoura"];

novosItens.forEach(item => {
    listaDeCompras.unshift(item); 
});

listaDeCompras.reverse();

console.log(listaDeCompras);