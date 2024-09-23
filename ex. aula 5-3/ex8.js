// Multiplicar valores de uma matriz por 2. Usando `map`, multiplique todos os valores de uma matriz (vetor de vetores) por 2.
const matriz = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
]

const multiplicacao = matriz.map(linha => linha.map(valor => valor * 2))
console.log(multiplicacao)