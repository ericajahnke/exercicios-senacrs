// Crie um script que recebe um vetor e um elemento, e retorna true se o elemento estiver presente no vetor, caso contrário, retorna false.
prompt = require("prompt-sync")()
let vetor = []
let tamanhoVetor = Number(prompt("Digite o tamanho do vetor: "))

for (let i = 0; i < tamanhoVetor; i++) {
    let elemento = Number(prompt(`Digite o elemento ${i+1} do vetor: `))
    vetor.push(elemento)
  }

let verificar = Number(prompt("Digite um número para verificar se está no vetor: "))   
let encontrado = false
  
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === verificar) {
      encontrado = true;
      break
    }
  }
  
  if (encontrado) {
    console.log(`O número ${verificar} está presente no vetor.`);
  } else {
    console.log(`O número ${verificar} não está presente no vetor.`);
  }