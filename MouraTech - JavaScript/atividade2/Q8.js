const prompt = require('prompt-sync')({sigint: true})

function analisarDesempenho(pontuacoes) {
    // Converte a string de pontuações em um array de inteiros
    let pontos = pontuacoes.split(" ").map(Number)

    // Inicializa as variáveis
    let recorde = pontos[0];
    let piorPontuacao = pontos[0]
    let numeroDeRecordes = 0;
    let indicePiorJogo = 0;

    // Itera sobre os jogos a partir do segundo jogo
    for (let i = 1; i < pontos.length; i++) {
        // Verifica se bateu o recorde de maior pontuação
        if (pontos[i] > recorde) {
            recorde = pontos[i]
            numeroDeRecordes++
        }

        // Verifica se fez o pior jogo
        if (pontos[i] < piorPontuacao) {
            piorPontuacao = pontos[i]
            indicePiorJogo = i + 1 // +1 porque o índice começa em 0
        }
    }

    return [numeroDeRecordes, indicePiorJogo]
}

// Exemplo de uso
let pontuacoes = prompt ("Digite as pontuções do jogo, separadas por espaço: ")
let resultado = analisarDesempenho(pontuacoes)
console.log(`Pedro bateu o seu recorde: ${resultado[0]} vezes`)
console.log(`Pedro teve a pior pontuação no: ${resultado[1]}º jogo`)
