// Desenvolva um programa que recebe um número correspondente ao mês (1 a 12) e, utilizando switch case, imprime a estação do ano (Primavera, Verão, Outono, Inverno).
prompt = require('prompt-sync')()
const mes = Number(prompt('Digite o número de um mês: '))

switch (mes) {
    case 1:
    case 2:
    case 12:
        console.log('A estação é verão.')
        break
    case 3:
    case 4:
    case 5:
        console.log('A estação é Outono.')
        break
    case 6:
    case 7:
    case 8:
        console.log('A estação é Inverno.')
        break
    case 9:
    case 10:
    case 11:
        console.log('A estação é Primavera.')
        break
    default:
        console.log('Mês inválido.')
}