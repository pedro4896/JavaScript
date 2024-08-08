//Escreva um programa que compare dois números e exiba qual deles é maior, menor ou se são iguais.
const prompt = require('prompt-sync')({sigint: true});
let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))
console.log(`Número informados: ${num1} ${num2}`)
if(num1 > num2){
    console.log(`O número ${num1} é maior!`)
}
else if(num1 < num2){
    console.log(`O número ${num2} é maior!`)
}
else{
    console.log(`Os números são iguais!`)
}