// Calcule a média de três notas de um aluno, aplique uma bonificação conforme a faixa de notas, e determine se ele está aprovado ou reprovado. Bonificações: notas acima de 85 recebem +5 pontos, entre 70 e 85 recebem +3 pontos, e abaixo de 70 não recebem bonificação.
prompt = require("prompt-sync")()
const nota = Number(prompt("Insira a nota: "))
const nota2 = Number(prompt("Insira a nota: "))
const nota3 = Number(prompt("Insira a nota: "))
const media = (nota + nota2 + nota3) / 3

if(media > 85) {
    console.log(`Você ficou com ${media.toFixed(0)} pontos.`)
    console.log(`A sua boneficação foi de +5 pontos.`)
} else if (media >= 70 && media <= 85) {
    console.log(`Sua nota foi de ${media.toFixed(0)} pontos.`)
    console.log(`A sua boneficação foi de +3 pontos.`)
} else if (media < 70) {
    console.log(`Sua nota foi de ${media.toFixed(0)} pontos.`)
    console.log(`A sua boneficação foi de 0 pontos.`)
}