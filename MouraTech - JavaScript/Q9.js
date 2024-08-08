const prompt = require('prompt-sync')({sigint: true});
let num;
do {
    num = Number(prompt("Digite um número: "))
} while (num != 0);
console.log("Número 0 digitado!")