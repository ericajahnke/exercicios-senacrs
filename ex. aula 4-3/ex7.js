// Faça um programa que leia um valor e mostre todos os valores inteiros entre 1 (inclusive) e o valor lido (inclusive). Considere que o valor lido será sempre maior que ZERO.
prompt = require("prompt-sync")()
let valor = Number(prompt("Digite um valor maior que ZERO: "))

if (valor <= 0) {
 console.log("O valor deve ser maior que ZERO.")
} else {
 for (let i = 1; i <= valor; i++) {
  console.log(i);
 }
}