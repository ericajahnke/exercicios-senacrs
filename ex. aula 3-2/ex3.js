// Um vendedor ganha comissão baseada no total de vendas: abaixo de 5000, nenhuma comissão; entre 5000 e 10000, 5%; acima de 10000, 10%. Calcule a comissão com base nas vendas de 3 meses.
prompt = require("prompt-sync")()
const venda = Number(prompt("Insira o valor da venda: "))
const dez = venda * (10/100)
const cinco = venda * (5/100)

if (venda < 5000) {
    console.log("A sua comissão foi de 0%.")
    console.log(`Comissão: R$0. `)
} else if (venda >= 5000 && venda == 10000) {
    console.log("A sua comissão foi de 5%.")
    console.log(`Comissão: R$${cinco}.`)
} else if (venda > 10000)  {
    console.log("A sua comissão foi de 10%.")
    console.log(`Comissão: R$${dez}.`)
}