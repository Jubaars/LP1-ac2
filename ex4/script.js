
let texto = prompt("Digite o seu texto");

if (texto) {
   
    let linhas = texto.split('\n');
    let quantidadeParagrafos = linhas.length;

    console.log(`Seu texto possui ${quantidadeParagrafos} parágrafo(s).`);
} else {
    console.log("Nenhum texto foi inserido.");
}