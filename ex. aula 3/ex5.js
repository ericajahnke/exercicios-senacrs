// Faça uma página que leia um número inteiro e informe se ele é par ou ímpar.
prompt = require('prompt-sync')()
const num = parseInt(prompt('Digite um número inteiro: '))

if (num % 2 == 0) {
    console.log(`O número ${num} é par.`);
  } else {
    console.log(`O número ${num} é ímpar.`);
  }