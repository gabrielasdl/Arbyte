// Faça um algoritmo que receba um texto e remova todos os espaços em brancos no começo e no final do texto. Utilize o método trim()

var rs = require('readline-sync')

var texto = rs.question("Digite seu texto aqui: ")

console.log(texto.trim())