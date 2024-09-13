// Faça um programa que leia 10 valores, calcule e escreva a média aritmética desses valores.
prompt = require("prompt-sync")()
const calcularMedia = (quantidade) => {
let soma = 0

for (let i = 1; i <= quantidade; i++) {
 let valor = Number(prompt(`Digite o valor ${i}: `))
 soma += valor
}
 let media = soma / quantidade
 return media
}

const quantidadeDeValores = 10;
let media = calcularMedia(quantidadeDeValores);
console.log(`A média aritmética dos valores é: ${media.toFixed(2)}`);