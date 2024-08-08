//Desenvolva um programa que continue solicitando um número do usuário até que ele insira o número 0.
const prompt = require('prompt-sync')({sigint: true});
let num;
do {
    num = Number(prompt("Digite um número: "))
} while (num != 0);
console.log("Número 0 digitado!")
