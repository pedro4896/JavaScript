const prompt = require('prompt-sync')({sigint: true})

function jurosSimples(capital, taxa, tempo) {
    taxa = taxa / 100
    let montante = capital * (1 + taxa * tempo);
    montante = montante.toFixed(2);
    console.log(`O valor da aplicação em juros simples é: R$${montante}`)
}

function jurosComposto(capital, taxa, tempo) {
    taxa = taxa / 100
    let montante = capital * Math.pow((1 + taxa), tempo);
    montante = montante.toFixed(2);
    console.log(`O valor da aplicação em juros composto é: R$${montante}`)
}

let capital = Number(prompt("Digite o valor do capital: "))
let taxa = Number(prompt("Digite a taxa de juros em porcentagem: "))
let tempo = Number(prompt("Digite o tempo de aplicação em anos: "))
jurosSimples(capital, taxa, tempo)
jurosComposto(capital, taxa, tempo)