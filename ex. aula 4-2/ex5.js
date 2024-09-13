// Informe para o ano digitado se é ou não ano de Copa do Mundo.
prompt = require("prompt-sync")()
let ano

while (true) {
 ano = Number(prompt("Digite um ano a partir de 1930: "))
 if (ano === 0 && ano <= 1930) {
  console.log("Digite um ano válido.")
 }
 if ((1930 - ano) % 4 === 0 && ano !== 1942 && ano !== 1946) {
  console.log("Esse é um ano de Copa do Mundo!")
 } else {
  console.log("Esse não é um ano de Copa do Mundo.")
 }
}