// Receba uma sequência de três números e determine se estão em ordem crescente, decrescente ou desordenada.
prompt = require("prompt-sync")()
const num1 = Number(prompt('Primeiro número: '))
const num2 = Number(prompt('Segundo número: '))
const num3 = Number(prompt('Terceiro número: '))

if (num1 > num2 || num1 > num3) {
    console.log("Ordem decrescente.")
} else if (num1 < num2 || num1 < num3) {
    console.log("Ordem crescente.")
}