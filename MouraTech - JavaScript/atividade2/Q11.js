const prompt = require('prompt-sync')({sigint: true})

function bissexto(ano) {
    if(ano % 400 === 0){
        return true
    }

    else if(ano % 100 === 0){
        return false
    }

    else if (ano % 4 === 0){
        return true
    }
    else{
        return false
    }
}

let ano = Number(prompt ("informe um ano: "))
if(bissexto(ano)){
    console.log(`${ano} é um ano bissexto.`)
}
else{
    console.log(`${ano} não é  um ano bissexto.`)
}