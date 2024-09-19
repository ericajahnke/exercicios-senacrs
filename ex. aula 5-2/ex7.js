// Crie um script que recebe um vetor de qualquer tamanho e qual número e retorna a média dos seus elementos.
prompt = require("prompt-sync")()
let num = []
let tamanhoVetor = Number(prompt("Digite o tamanho do vetor: "))

for (let i = 0; i < tamanhoVetor; i++) {
  let elemento = Number(prompt(`Digite o elemento ${i+1} do vetor: `))
  num.push(elemento)
}

const soma = num.reduce((acc, val) => acc + val, 0);
const media = soma / num.length;

console.log(`A média desses valores é: ${media.toFixed(2)}!`)