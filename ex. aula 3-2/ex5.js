// Cálculo do IMC com Categorias Detalhadas. Implemente um programa que calcula o Índice de Massa Corporal (IMC) e categoriza o resultado de acordo com as faixas específicas, fornecendo uma mensagem detalhada sobre o estado de saúde.
prompt = require("prompt-sync")()
const peso = Number(prompt("Digite o seu peso: "))
const altura = Number(prompt("Digite a altura em metros: "))
let imc = peso / (Math.pow(altura,2));

console.log(imc)

if ((imc >= 18.5) && (imc <= 24.9)){
    console.log(`Seu imc foi de: ${imc}`)
    console.log(`Você está abaixo do peso!`)
} else if((imc >= 18.5) && (imc <= 24.9)) {
    console.log(`Seu imc foi de: ${imc}`)
    console.log(`Você está com o peso ideal!`)
} else if(imc >= 25 && imc <= 29.9) {
    console.log(`Seu imc foi de: ${imc}`)
    console.log(`Você está acima do peso!`)
} else if(imc >= 30 && imc <= 34.9) {
    console.log(`Seu imc foi de: ${imc}`)
    console.log(`Você está com obesidade de grau 1!`)
} else if(imc >= 35 && imc <= 39.9) {
    console.log(`Seu imc foi de: ${imc}`)
    console.log(`Você está com obesidade de grau 2!`)
} else if(imc >= 40) {
    console.log(`Seu imc foi de: ${imc}`)
    console.log(`Você está com obesidade de grau 3!`)
}