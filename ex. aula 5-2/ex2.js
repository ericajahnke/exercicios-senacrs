// Crie um vetor de cinco números aleatórios. Ordene o vetor em ordem crescente e exiba o resultado.
const numeros = [5, 2, 17, 23, 12]
const ordem = numeros.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
})

console.log(ordem)
