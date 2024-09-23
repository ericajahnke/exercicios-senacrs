// Obter a soma total de preços. Dado um vetor de objetos representando produtos (com `nome` e `preco`), utilize `reduce` para calcular o valor total de todos os produtos.
const produtos = [
 { nome: 'Produto 1', preco: 100 },
 { nome: 'Produto 2', preco: 200 },
 { nome: 'Produto 3', preco: 150 },
]

const soma = produtos.reduce((acc, produto) => acc + produto.preco, 0)
console.log(soma)