// Faça um algoritmo que receba um texto e imprima ele em letra maisucula novamente.

var rs = require('readline-sync')

var texto = rs.question("Informe o texto: ")

console.log(texto.toUpperCase())