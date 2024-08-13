const prompt = require('prompt-sync')({sigint: true})

function frutas(fruta) {
    switch (fruta) {
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break

        case "maca":
            console.log("Não vendemos esta fruta aqui")
            break

        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
        break
    
        default:
            console.log("Erro entrada inválida!")
            break
    }
}

let fruta = prompt("Digite o nome de um fruta: ")
frutas(fruta)