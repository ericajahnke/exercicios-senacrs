// Concatenar listas de strings. Dado um vetor de vetores de strings, use `reduce` para concatenar todas as strings em uma única lista.
const listas = [
 ['Mariana', 'João'],
 ['Érica', 'Rafael'],
 ['Lucas', 'Isa']
]

const listaConcatenada = listas.reduce((acc, lista) => acc.concat(lista), [])
console.log(listaConcatenada)