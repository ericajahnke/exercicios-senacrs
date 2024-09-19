// Crie uma matriz 2x3, encontre o maior valor presente na matriz.
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

let valorMax = matriz.flat().reduce((max, val) => val > max ? val : max, -Infinity)
console.log(valorMax)