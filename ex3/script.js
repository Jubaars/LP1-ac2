let numeros = [1.4, 3.9, 4.4, 6.2, 12.9];
let numerosArredondados=[];
 
numeros.forEach(numeros => {
numerosArredondados.push(Math.ceil(numeros));
})
 
console.log(numerosArredondados);