// Encontrar o Fatorial de qualquer número.
prompt = require("prompt-sync")()
var fatorial = Number(prompt("Digite um valor: "));
var resposta = fatorial;

for (var i = 1; i <= fatorial; i++) {
    resposta = resposta *= i;
}
console.log(`O fatorial do número ${fatorial} é: ${resposta}!`);