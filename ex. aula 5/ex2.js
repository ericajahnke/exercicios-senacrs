// Crie um vetor com três números. Adicione um número ao final do vetor, remova o primeiro número e exiba o vetor resultante.
prompt = require("prompt-sync")()
const numeros = ["10", "20", "30"]

numeros.push("40")
numeros.shift()

console.log(numeros)