//Crie um programa que receba um nome completo e exiba: O nome em letras maiúsculas; O nome em letras minúsculas; O número de caracteres no nome; e, apenas o primeiro nome.

// npm install prompt-sync
//Aqui você está importando o módulo prompt-sync e criando uma instância dele. A opção {sigint: true} permite que o programa seja interrompido com Ctrl+C sem problemas.
//Execute o arquivo com o node
const prompt = require('prompt-sync')({sigint: true});
const nome = prompt("Digite seu nome completo: ");
const primeiroNome = nome.split(' ')
console.log(`Letra maiúsculas: ${nome.toUpperCase()}`);
console.log(`Letra minúsculas: ${nome.toLowerCase()}`);
console.log(`Número de caracteres: ${nome.length}`);
console.log(`Primeiro Nome: ${primeiroNome[0]}`);