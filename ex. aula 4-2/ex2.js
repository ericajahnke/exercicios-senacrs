// Imprimir um triângulo de asteriscos com 4 linhas.
prompt = require("prompt-sync")();
let linhas;

while (true) {
  linhas = Number(prompt("Digite o número de linhas do triângulo: "));
  if (isNaN(linhas) || linhas <= 0) {
    console.log("Entrada inválida. Por favor, insira um número positivo.");
    continue;
  }
  for (let i = 1; i <= linhas; i++) {
    let linha = "";
    for (let j = 1; j <= linhas - i; j++) {
      linha += " ";
    }
    for (let j = 1; j <= i; j++) {
      linha += "* ";
    }
    console.log(linha);
  }
  break;
}