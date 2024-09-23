// Somar valores positivos de uma matriz. Dado um vetor de vetors com números inteiros (incluindo negativos), use `reduce` para somar apenas os números positivos.
const matriz = [
 [1, -2, 3],
 [4, -5, 6],
 [-7, 8, 9],
]

const soma = matriz.reduce((acc, linha) => {
 return acc + linha.reduce((soma, valor) => {
     return valor > 0 ? soma + valor : soma
 }, 0)
}, 0)

console.log(soma)