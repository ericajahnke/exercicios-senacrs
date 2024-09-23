// Filtrar produtos caros. Dado um vetor de objetos representando produtos (com `nome`, `preco` e `categoria`), use `filter` para retornar os produtos que custam mais de R$100.
let produtos = [
 { produto: "Delineador", preco: 20 },
 { produto: "Batom", preco: 50 },
 { produto: "Base", preco: 150 }
]

let caros = produtos.filter (produtos => produtos.preco > 100)
console.log(caros)