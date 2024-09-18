// Crie um vetor de três números inteiros. Multiplique cada elemento por 2 e exiba o vetor resultante.
const numeros = [5, 2, 17, 23, 12]
const ordem = numeros.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
})

console.log(ordem)
