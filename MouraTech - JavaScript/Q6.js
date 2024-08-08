//Desenvolva um programa que receba uma nota de 0 a 10 e exiba o conceito correspondente: A (9-10), B (7-8.9), C (5-6.9), D (<5).
const prompt = require('prompt-sync')({sigint: true});
let nota =   Number(prompt("Digite sua nota: "))

while (nota < 0 || nota > 10) {
    nota = Number(prompt("Digite uma idade válida: "))
}

if(nota >= 9){
    console.log("Nota A")
}
else if(nota >= 7 && nota < 9){
    console.log("Nota B")
}
else if(nota >= 5 && nota < 7){
    console.log("Nota C")
}
else{
    console.log("Nota D")
}