// Faça uma calculadora simples(página), com as quatro operações básicas ("+", "-", "*", "/") e dois campos para números.
prompt = require('prompt-sync')()
const num1 = Number(prompt('Digite seu primeiro número: '))
const num2 = Number(prompt('Digite seu segundo número: '))
let operator = prompt("Digite seu operador (+, -, *, /): ")

if (operator == "+") {
    operator = num1 + num2
    console.log(`O seu resultado foi: ${operator}`)
} else if (operator == "-"){
    operator = num1 - num2
    console.log(`O seu resultado foi: ${operator}`)
} else if (operator == "*"){
    operator = num1 * num2
    console.log(`O seu resultado foi: ${operator}`)
} else if (operator == "/") {
    operator = num1 / num2
    console.log(`O seu resultado foi: ${operator}`)
} else {
    console.log('ERRO: Seu operador é inválido!')
}