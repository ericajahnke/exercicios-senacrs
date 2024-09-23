// Transformar lista de objetos em string. Usando `map`, transforme um vetor de objetos (com `nome` e `idade`) em um vetor de strings formatadas como `"Nome: X, Idade: Y"`.
const pessoas = [
 { nome: 'Érica', idade: 30 },
 { nome: 'Rafael', idade: 25 },
 { nome: 'João', idade: 40 },
];

const lista = pessoas.map(pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
console.log(lista)