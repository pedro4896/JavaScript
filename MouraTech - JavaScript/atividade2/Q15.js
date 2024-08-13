const prompt = require('prompt-sync')({sigint: true})

function verificarCompra(veiculo) {
    switch (tipoVeiculo.toLowerCase()) {
        case 'hatch':
            console.log("Compra efetuada com sucesso");
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log("Tem certeza que não prefere este modelo?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    }
}

let veiculo = prompt("Digite um veículo: ")

// Exemplo de uso
verificarCompra(veiculo);           // Compra efetuada com sucesso
verificarCompra('sedan');           // Tem certeza que não prefere este modelo?
verificarCompra('motocicleta');     // Tem certeza que não prefere este modelo?
verificarCompra('caminhonete');     // Tem certeza que não prefere este modelo?
verificarCompra('esportivo');       // Não trabalhamos com este tipo de automóvel aqui
