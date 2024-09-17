// Crie um vetor de cores. Pergunte ao usuário para inserir uma cor. Exiba a posição da cor no vetor ou uma mensagem dizendo que a cor não foi encontrada.
prompt = require("prompt-sync")()
let cores = ["rosa", "roxo", "azul", "vermelho", "amarelo"]
let cor = prompt("Insira uma cor: ")
let posicao = cores.indexOf(cor)

if (cor !== -1) {
    console.log(`A posição da cor é: ${posicao}!`)
} else { 
    console.log("A cor não foi encontrada.")
}
