const prompt = require('prompt-sync')({sigint: true})

function dinheiro(valor) {
    valor = valor.toFixed(2);
    valor = valor.replace(".",",")
    console.log(`R$${valor}`)
}

let valor = Number(prompt("Digite um valor: "))
dinheiro(valor)