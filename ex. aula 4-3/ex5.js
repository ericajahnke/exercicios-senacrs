// Escreva um algoritmo para ler 2 valores e imprimir o resultado da divisão do primeiro pelo segundo. Se o segundo valor informado for ZERO, deve ser lido um novo valor.
// Acrescente uma mensagem de ‘VALOR INVÁLIDO’ no exercício 5, caso o segundo valor informado seja ZERO.
prompt = require("prompt-sync")()
const lerValor = (mensagem, resultado) => {
let valor

 while (true) {
 valor = Number(prompt(mensagem))
  if (valor !== 0) {
  resultado.value = valor
  break
 }
 console.log("VALOR INVÁLIDO. O valor não pode ser ZERO.");
 }
}

let valor1 = { value: 0 };
let valor2 = { value: 0 };
lerValor("Digite o primeiro valor: ", valor1);
lerValor("Digite o segundo valor (diferente de ZERO): ", valor2);
let resultado = valor1.value / valor2.value;
console.log(`O resultado da divisão é: ${resultado.toFixed(1)}`);