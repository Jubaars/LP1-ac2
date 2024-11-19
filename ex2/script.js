let numeros = [2, 5, 8, 13, 16, 21];
let numerosMultiplicado = []
 
numeros.forEach(numeros => {
if(numero % 2 === 0){
 numerosMultiplicado.push(numero)}  
 else {
let multiplicador = Math.floor(Math.random()* 5);
numerosMultiplicado.push(numeros * multiplicador)
}
})
console.log(numerosMultiplicado);