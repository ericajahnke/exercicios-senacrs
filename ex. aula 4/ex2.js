// Imprimir todos os números de 1 a 30, exceto os múltiplos de 4.
prompt = require("prompt-sync")()
for (let i = 1; i <= 30; i++) {
 if (i % 4 !== 0) {
  console.log(i)
 }
}