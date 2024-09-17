// Crie uma matriz 3x3, calcule a soma de todos os seus elementos.
prompt = require("prompt-sync")();
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let soma = matriz.flat().reduce((conta, valor) => conta + valor, 0);
console.log(soma);