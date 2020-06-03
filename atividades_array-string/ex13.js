// Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus nomes cientificos : Kobus ellipsiprymnus

var rs = require('readline-sync')

var frase = rs.question("Insira aqui a sua frase: ").toLowerCase()

console.log(frase.replace("antilope", "Kobus ellipsiprymnus"))