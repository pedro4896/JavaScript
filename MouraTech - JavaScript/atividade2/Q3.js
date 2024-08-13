const prompt = require('prompt-sync')({sigint: true})

function potencia(base, expoente) {
   let resultado = 1
   for (let index = 0; index < expoente; index++) {
    resultado*=base
   }
   console.log(`O resultado da potência é: ${resultado}`)
}

let base = Number(prompt("Digite a base valor: "))
let expoente = Number(prompt("Digite o expoente valor: "))
potencia(base, expoente)