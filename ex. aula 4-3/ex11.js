// Faça um programa que leia a quantidade de alunos em uma turma. Após, leia as notas desses alunos, calcule e mostre a média aritmética dessas notas.
prompt = require("prompt-sync")()
const estudantes = Number(prompt("Qual o número de estudantes? "))
let notas

for (let i = 0; i > estudantes; i++) {
  notas = Number(prompt(`Qual a nota do aluno ${i+1}? `))
}

const media = notas / estudantes
console.log(`A média da turma é ${media.toFixed(1)}`)
