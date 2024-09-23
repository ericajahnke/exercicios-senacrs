// Adicionar um desconto aos produtos. Usando `map`, adicione um desconto de 10% a todos os produtos de um vetor de objetos (com `nome` e `preco`), criando um novo vetor com os produtos descontados.
let produtos = [
 { nome: 'Produto 1', preco: 150 },
 { nome: 'Produto 2', preco: 250 },
 { nome: 'Produto 3', preco: 350 },
]

let desconto = produtos.map(produto => {
  return {
    nome: produto.nome,
    preco: produto.preco * 0.9
  }
})

console.log(produtos)
console.log(desconto)