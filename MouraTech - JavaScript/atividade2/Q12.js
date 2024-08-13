const prompt = require('prompt-sync')({sigint: true})

function fatorial(numero) {
    let fatorial = 1
    for (let index = 2; index < numero+1; index++) {
        fatorial = fatorial * index
    }
    console.log(`${numero}! = ${fatorial}`)  
}

let numero = Number(prompt("Digite um número inteiro: "))
fatorial(numero)