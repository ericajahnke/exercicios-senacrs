// Crie um vetor de cinco números inteiros. Calcule e exiba a soma de todos os números.
prompt = require("prompt-sync")()
let numerosInt = [1, 2, 3, 4, 5]
let soma = numerosInt.reduce((total, numero) => total + numero, 0)

console.log(soma)