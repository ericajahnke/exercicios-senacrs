// Faça um programa que leia 10 valores, calcule e escreva a média aritmética desses valores.
prompt = require("prompt-sync")()
let soma = 0
let contador = 0

while (contador < 10) {
  let valor = prompt(`Digite o valor ${contador + 1}: `)
  valor = Number(valor)

  if (isNaN(valor)) {
    console.log("Entrada inválida. Por favor, digite um valor numérico.")
    continue
  }

  soma += valor
  contador++
}
 
const media = soma / contador
console.log(`A média aritmética dos valores é: ${media}`)
