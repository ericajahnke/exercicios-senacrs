// Faça um programa que leia a quantidade de alunos em uma turma. Após, leia as notas desses alunos, calcule e mostre a média aritmética dessas notas.
prompt = require("prompt-sync")()
const calcularMedia = (notas) => {

let soma = notas.reduce((acc, nota) => acc + nota, 0)
 return soma / notas.length
}

let quantidadeDeAlunos = Number(prompt("Digite a quantidade de alunos na turma: "))
if (quantidadeDeAlunos <= 0) {
 console.log("A quantidade de alunos deve ser maior que ZERO.")
} else {
 let notas = []
 for (let i = 1; i <= quantidadeDeAlunos; i++) {
  let nota = Number(prompt(`Digite a nota do aluno ${i}: `))
  notas.push(nota)
 }

 let media = calcularMedia(notas)
 console.log(`A média aritmética das notas é: ${media.toFixed(2)}`)
}