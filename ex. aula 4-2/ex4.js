// Dada uma palavra, escreva um código que conte quantas vezes a letra "qualquer letra" aparece usando um loop for.
prompt = require("prompt-sync")()
let palavra = prompt("Digite uma palavra: ")
let letra = prompt("Digite uma letra existente nessa palavra: ")
let contagem = 0

for (let i = 0; i < palavra.length; i++) {
 if (palavra[i] === letra) {
  contagem++
 }
}
console.log(`A letra '${letra}' aparece ${contagem}x na palavra '${palavra}'.`)