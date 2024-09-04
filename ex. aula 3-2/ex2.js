// Receba as medidas dos lados de um quadrilátero e determine se é um quadrado, retângulo, losango ou outro.
prompt = require("prompt-sync")()
const a = Number(prompt("Primeiro número do lado: "))
const b = Number(prompt("Segundo número do lado: "))
const c = Number(prompt("Terceiro número do lado: "))
const d = Number(prompt("Quarto número do lado: "))

if(a === b && b === c && c === d){
    console.log("Quadrado.")
} else if (a === c && b === d){
        console.log("Retângulo.")
} else if (a === b) {
        console.log("Losango.")
} else {
    console.log("Outra forma.")
}