// Faça uma página que permita ao usuário inserir um valor em Reais (BRL) e converta-o para Dólares (USD) ou Euros (EUR), com base em uma taxa de câmbio fixa. Use um campo de seleção (dropdown) para o usuário escolher a moeda.
prompt = require('prompt-sync')()
const brl = Number(prompt('Quantos reais você tem? '))
const usd = brl / 5.64 
const eur = brl / 6.24
const moeda = prompt('Você quer converter para USD ou EUR? ')

if (moeda == 'USD') {
    console.log(`Convertendo você tem ${usd.toFixed(2)} doláres.`)
} else if (moeda == 'EUR') {
    console.log(`Convertendo você tem ${eur.toFixed(2)} euros.`)
} else {
    console.log('ERRO: Moeda inválida!')
}