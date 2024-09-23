// Calcular a média de idade. Dado um vetor de objetos com pessoas (com `nome`, `idade` e `profissao`), utilize `reduce` para calcular a média de idade das pessoas.
let pessoa = [
 {nome: "Érica", idade: 18, profissao: "T.I"},
 {nome: "Rafael", idade: 21, profissao: "Desing"},
 {nome: "João", idade: 19, profissao: "T.I"},
]

let idades = pessoa.reduce((acc, pessoa) => acc + pessoa.idade, 0)
console.log(`A soma das idades é de: ${idades}!`)

let media = idades / pessoa.length
console.log(`A média das idades é de: ${media.toFixed(0)}!`)