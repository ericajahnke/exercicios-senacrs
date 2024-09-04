// Desenvolva um programa que verifica se uma senha é considerada forte. Uma senha é considerada forte se tiver pelo menos 8 caracteres, incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.
prompt = require('prompt-sync')()
const senha = prompt("Digite a senha: ");

    if (senha.length < 8) {
      console.log("A senha deve conter 8 caracteres.")
    }
    if (!/[A-Z]/.test(senha)) {
      console.log("A senha deve conter pelo menos uma letra maiúscula.")
    }
    if (!/[a-z]/.test(senha)) {
      console.log("A senha deve conter pelo menos uma letra minúscula.")
    }  
    if (!/\d/.test(senha)) {
      console.log("A senha deve conter pelo menos um número.")
    }
    if (!/[^a-zA-Z0-9]/.test(senha)) {
      console.log("A senha deve conter pelo menos uma caractere especial.")
    }