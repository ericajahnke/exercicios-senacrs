// Desenvolva um programa que verifica se um número de cartão de crédito é válido. O número deve ter 16 dígitos e começar com 4 (Visa), 5 (Mastercard), ou 6 (Discover).
prompt = require('prompt-sync')()
const cardNum = prompt('Digite o número do seu cartão: ')

if (cardNum.length !== 16) {
    console.log('Número inválido.')
} else {
    if (cardNum[0] === '4') {
        console.log('Seu cartão Visa é válido.')
    } else if (cardNum[0] === '5') {
        console.log('Seu cartão Mastercard é válido.')
    } else if (cardNum[0] === '6') {
        console.log('Seu cartão Discover é válido.')
    } else {
        console.log('Número inválido.')
    }
}