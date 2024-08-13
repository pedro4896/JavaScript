const prompt = require('prompt-sync')({sigint: true});

function verificaTriangulo(ladoA, ladoB, ladoC){
    if(ladoA < ladoB + ladoC || ladoB < ladoA + ladoC || ladoC < ladoB + ladoA){
        //isoceles = 2 lados iguais
        //escaleno = 3 lados diferentes
        //equilatero = 3 lados iguais

        if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
            console.log("Forma um triângulo equilátero!")
        }
        else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
            console.log("Forma um triângulo escaleno!")
        }
        else{
            console.log("Forma um triângulo isoceles!")
        }
    }
    else{
        console.log("Não ofrma um triângulo!")
    }
}

let ladoA = Number(prompt("Digite o primeiro valor: "))
let ladoB = Number(prompt("Digite o segundo valor: "))
let ladoC = Number(prompt("Digite o terceiro valor: "))
verificaTriangulo(ladoA, ladoB, ladoC)