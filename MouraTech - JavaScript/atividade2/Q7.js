const prompt = require('prompt-sync')({sigint: true})

function bhaskara(a, b, c) {
    let delta = b * b - 4 * a * c;
    if(delta < 0){
        let resposta = "Delta negativo"
        return resposta
    }
    else{
        let resposta = []
        resposta.push(((-b) + Math.sqrt(delta)) / (2 * a))
        resposta.push(((-b) - Math.sqrt(delta)) / (2 * a))
        return resposta
    }
}

let a = Number(prompt ("Digite o termo ax²: "))
let b = Number(prompt ("Digite o termo bx: "))
let c = Number(prompt ("Digite o termo c: "))

console.log(`A resposta é: ${bhaskara(a, b, c)}`)