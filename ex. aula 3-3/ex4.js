// Crie um programa que recebe o nome de um animal e, utilizando switch case, classifica o animal como "Mamífero", "Ave", "Réptil", etc. Entrada de ao menos 5 animais para cada espécie.
prompt = require("prompt-sync")()
const animal = prompt('Digite o nome de um animal: ')

switch (animal) {
    case 'humano':
    case 'cachorro':
    case 'gato':
    case 'vaca':
    case 'ornitorrinco':
        console.log('Esse animal é um mamífero.')
        break
    case 'pombo':
    case 'galinha':
    case 'tucano':
    case 'águia':
    case 'corvo':
        console.log('Esse animal é uma ave.')
        break
    case 'tartaruga':
    case 'cobra':
    case 'crocodilo':
    case 'jacaré':
    case 'camaleão':
        console.log('Esse animal é um réptil.')
        break
    case 'peixe':
    case 'tubarão':
    case 'lambari':
    case 'tilápia':
    case 'traíra':
        console.log('Esse animal é um peixe.')
        break
    default:
        console.log('Animal não reconhecido.')
}