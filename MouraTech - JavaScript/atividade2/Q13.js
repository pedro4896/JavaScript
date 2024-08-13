const prompt = require('prompt-sync')({sigint: true})

function dias(dia) {
    switch (dia) {
        case 1:
            console.log("Hoje é domingo!")
            break;
        case 2:
            console.log("Hoje é segunda-feira!")
            break;
        case 3:
                console.log("Hoje é terça-feira!")
            break;
        case 4:
            console.log("Hoje é quarta-feira!")
            break;
        case 5:
            console.log("Hoje é quinta-feira!")
            break;
        case 6:
            console.log("Hoje é sexta-feira!")
            break;
        case 7:
            console.log("Hoje é sábado!")
            break;
        default:
            console.log("Dia inválido!")
            break;
    }
}

let dia = Number(prompt("Digite um número de 1 - 7:  "))
dias(dia)