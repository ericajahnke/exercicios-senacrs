// Ler um vetor de 10 nomes. Entrar com o nome de uma pessoa pelo prompt. Escrever a mensagem “ACHEI” se o nome estiver no vetor e “NÃO ACHEI” caso contrário.
prompt = require("prompt-sync")()
let vetn = ["gaby", "geovana", "rafael", "joao", "lucas", "erica", "aline", "vitor", "pedro", "maria"]
const n = prompt("Digite um nome: ").toLowerCase();

if (vetn.includes(n)) {
    console.log(`Encontrei o nome ${n}!`);
} else {
    console.log(`Não encontrei o nome ${n}.`);
}