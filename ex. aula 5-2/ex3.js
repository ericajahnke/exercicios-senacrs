// Crie um vetor de números e determine o maior número presente no vetor.
const vetor = [3, 6, 1, 7, 5, 10]

let maior = vetor[0]

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i]
    }
}
console.log(vetor)
console.log(`O maior número no vetor é: ${maior}!`)