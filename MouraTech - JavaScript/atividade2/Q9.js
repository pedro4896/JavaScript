const prompt = require('prompt-sync')({sigint: true})

function arredondarNota(nota) {
    // Se a nota for abaixo de 38, não arredonda porque o aluno já está reprovado
    if (nota < 38) {
        return nota
    }

    // Calcula o próximo múltiplo de 5
    const proximoMultiplo5 = Math.ceil(nota / 5) * 5

    // Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredonda a nota
    if (proximoMultiplo5 - nota < 3) {
        return proximoMultiplo5
    } else {
        return nota
    }
}

function classificarAluno(nota) {
    const notaFinal = arredondarNota(nota)
    if (notaFinal >= 40) {
        return `Aprovado com nota: ${notaFinal}`
    } else {
        return `Reprovado com nota: ${notaFinal}`
    }
}

let nota = Number(prompt ("Insira a usa nota: "))
let resultado = classificarAluno(nota)
console.log(resultado)