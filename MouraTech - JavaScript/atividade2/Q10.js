const prompt = require('prompt-sync')({sigint: true})

function divisivel_por_tres(numero) {
    numero = Math.floor(numero)
    if(numero % 3 == 0){
        console.log("O número é divisível por 3")
    }
    else{
        console.log("O número não é divisível por 3")
    }
}

let numero = Number(prompt ("Insira um numero inteiro: "))
divisivel_por_tres(numero)