//Crie um programa que receba dois números, realize as operações de adição, subtração, multiplicação e divisão, e exiba os resultados.
const prompt = require('prompt-sync')({sigint: true});

function calculadora(num1, num2) {
    console.log(`Número digitados ${num1} - ${num2}`)
    console.log(`A soma desses valores é: ${num1 + num2}`)
    console.log(`A subtração desses valores é: ${num1 - num2}`)
    console.log(`A multiplição desses valores é: ${num1 * num2}`)
    if(num2 === 0){
        console.log("1º Mandamento da matemática: 'Nunca dividirás por 0'")
    }
    else{
        console.log(`A divisão desses valores é: ${num1 / num2}`)
    }
}

let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))

calculadora(num1,num2)