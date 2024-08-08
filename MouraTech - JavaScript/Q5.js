//Crie um programa que receba a idade de uma pessoa e exiba uma mensagem indicando se ela é menor de idade, adulta ou idosa (considerando as faixas: <18, 18-59, 60+).
const prompt = require('prompt-sync')({sigint: true});
let idade = Number(prompt("Digite a sua idade: "))

while (idade <= 0 || idade > 120) {
    idade = Number(prompt("Digite uma idade válida: "))
}

if(idade < 18){
    console.log("Você é menor de idade!")
}
else if(idade <= 59){
    console.log("Você é adulto!")
}
else{
    console.log("Você é idoso!")
}