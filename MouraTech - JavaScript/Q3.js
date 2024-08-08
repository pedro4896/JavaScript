//Crie um programa que receba dois números, realize as operações de adição, subtração, multiplicação e divisão, e exiba os resultados.
const prompt = require('prompt-sync')({sigint: true});
let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))
while (num2 === 0) {
    num2 = Number(prompt("Digite um número diferente de 0: "))
}
console.log(`Adição: ${num1} + ${num2} = ${num1 + num2}`)
console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`)
console.log(`Multiplicação: ${num1} * ${num2} = ${num1 * num2}`)
console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`)