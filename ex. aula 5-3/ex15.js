// Filtrar e transformar valores de uma matriz. Usando `map` e `filter`, crie um algorimot que filtre os números pares de uma matriz e multiplique-os por 3.
const matriz = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
]

const resultado = matriz
 .flat()
 .filter(numero => numero % 2 === 0)
 .map(par => par * 3)

console.log(resultado)