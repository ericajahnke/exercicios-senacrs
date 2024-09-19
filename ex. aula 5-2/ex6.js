// Crie um script que recebe um vetor de números e retorna o maior número presente no vetor.
prompt = require("prompt-sync")()
let num = []
let tamanhoVetor = Number(prompt("Digite o tamanho do vetor: "))

for (let i = 0; i < tamanhoVetor; i++) {
  let elemento = Number(prompt(`Digite o elemento ${i+1} do vetor: `))
  num.push(elemento)
}

num.sort((a, b) => a - b)

let maior = num[num.length - 1]

console.log(num)
console.log(`O maior número deste vetor é: ${maior}!`)