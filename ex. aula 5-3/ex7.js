// Filtrar alunos aprovados. Dado um vetor de objetos representando alunos (com `nome` e `nota`), use `filter` para retornar apenas os alunos com nota maior que 7.
const alunos = [
 { nome: 'Érica', nota: 8.5 },
 { nome: 'Rafael', nota: 6.5 },
 { nome: 'João', nota: 7.0 },
 { nome: 'Lucas', nota: 9.0 },
]

const alunosAprovados = alunos.filter(aluno => aluno.nota > 7)
console.log(alunosAprovados)