// Escreva um algoritmo para ler 2 notas de um aluno, calcular e imprimir a média final. Logo após escrever a mensagem "Calcular a média de outro aluno? 1. Sim 2. Não" e solicitar uma resposta. Se a resposta for 1, o algoritmo deve ser executado novamente, caso contrário deve ser encerrado.
prompt = require("prompt-sync")()
let continuar = true

while (true) {
 let nota1 = Number(prompt("Digite a primeira nota: "))
 let nota2 = Number(prompt("Digite a segunda nota: "))
 let media = (nota1 + nota2) / 2
 console.log("A média final é: " + media)

 let resposta = prompt("Calcular a média de outro aluno? 1. Sim 2. Não ")
 if (resposta === '2') {
  continuar = false
  console.log("Programa encerrado.")
  break
 } else if (resposta !== '1') {
  console.log("Resposta inválida. O programa será encerrado.")
  continuar = false
 }
}