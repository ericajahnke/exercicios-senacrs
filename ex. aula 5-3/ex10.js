// Encontrar a pessoa mais velha. Dado um vetor de objetos com pessoas (com `nome` e `idade`), use `reduce` para encontrar a pessoa mais velha.
const pessoas = [
 { nome: 'Érica', idade: 30 },
 { nome: 'Rafael', idade: 45 },
 { nome: 'João', idade: 28 },
 { nome: 'Lucas', idade: 50 },
];

const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
 return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha
})

console.log(pessoaMaisVelha)