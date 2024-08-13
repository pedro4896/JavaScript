const prompt = require('prompt-sync')({sigint: true})

function divisao(dividendo, divisor) {
    console.log(`O resultado da divisão é ${Math.floor(dividendo / divisor)}`)
    console.log(`O resto da divisão é ${dividendo % divisor}`)
}

let dividendo = Number(prompt("Digite o dividendo: "))
let divisor = Number(prompt("Digite o divisor: "))
divisao(dividendo, divisor)