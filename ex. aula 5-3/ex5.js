// Transformar vetor de nomes em um objeto. Usando `reduce`, transforme um vetor de nomes (ex.: `['Ana', 'João', 'Pedro']`) em um objeto onde cada nome é uma chave e o valor é o comprimento do nome.
const nomes = ['Érica', 'Rafael', 'João']

const objetoNomes = nomes.reduce((acc, nome) => {
   acc[nome] = nome.length;
   return acc
}, {})

console.log(objetoNomes)