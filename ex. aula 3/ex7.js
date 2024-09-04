// Crie uma página que leia uma nota final de 0 a 10 e classifique-a em conceitos como A (>=9), B (>=7 e <9), C (>=5 e <7), D (>=3 e <5) e E (<3).
prompt = require('prompt-sync')()
const nota = Number(prompt('Digite a nota do aluno (0-10): '))

if (nota >= 9) {
    console.log('O aluno ficou com o conceito A.')
} else if (nota >= 7 && nota < 9) {
    console.log('O aluno ficou com o conceito B.')
} else if (nota >= 5 && nota < 7) {
    console.log('O aluno ficou com o conceito C.')
} else if (nota >= 3 && nota < 5) {
    console.log('O aluno ficou com o conceito D.')
} else if (nota < 3) {
    console.log('O aluno ficou com o conceito E.')
}