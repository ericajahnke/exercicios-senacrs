// Escreva um algoritmo para ler 2 valores e imprimir o resultado da divisão do primeiro pelo segundo. Se o segundo valor informado for ZERO, deve ser lido um novo valor.
// Acrescente uma mensagem de ‘VALOR INVÁLIDO’ no exercício 5, caso o segundo valor informado seja ZERO.
prompt = require("prompt-sync")()
let valor1 = Number(prompt("Digite o primeiro valor: "))
let valor2 = Number(prompt("Digite o segundo valor: "))

while (valor2 === 0) {
  console.log("Valor inválido")
  valor2 = Number(prompt("Digite um novo valor para o segundo número: "))
} 

let resultado = valor1 / valor2

console.log(`O resultado da divisão é: ${resultado}`)
