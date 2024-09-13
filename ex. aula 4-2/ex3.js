// Calcular a tabuada para qualquer número.
prompt = require("prompt-sync")()
let numero = Number(prompt("Digite um número: "))

for (let i = 1; i <= 10; i++) {
 let resposta = numero * i
console.log(`${numero} x ${i} = ${resposta}!`)
}