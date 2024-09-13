// Faça um programa para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido, escreva uma mensagem que indica se cada valor é PAR ou ÍMPAR.
prompt = require("prompt-sync")()
const verificar = (numero) => {
console.log(numero % 2 === 0 ? `${numero} é PAR` : `${numero} é ÍMPAR`)
}
while (true) {
 let valor = Number(prompt("Digite um valor inteiro (ou 0 para encerrar): "))
 if (valor === 0) {
  console.log("Programa encerrado.")
  break
 }
 verificar(valor)
}