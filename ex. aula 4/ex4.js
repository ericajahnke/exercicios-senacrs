// Imprimir a sequência de Fibonacci até o 10º termo.
prompt = require("prompt-sync")()
let n = 10
let a = 0, b = 1

console.log("Sequência de Fibonacci até o 10º termo:")
for(let i = 1; i <= n; i++) {
 console.log(a)
 let temp = a
  a = b
  b = temp + b
}