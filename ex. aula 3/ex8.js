// Crie uma página onde o usuário insira um número e a página informe se ele é primo ou não. (Dica: faça a verificação de primaridade apenas para números menores ou iguais a 100).
const prompt = require('prompt-sync')()

const isPrime = (n) => {
  if (n <= 1) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

const main = () => {
const num = parseInt(prompt('Digite um número: '))
  if (isPrime(num)) {
    console.log(`O número ${num} é primo.`)
  } else {
    console.log(`O número ${num} não é primo.`)
  }
}