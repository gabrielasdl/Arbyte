// Faça um programa que receba uma palavra e diga se existe vogais ou não. Utilize o método indexOf()

var rs = require('readline-sync')

var palavra = rs.question("Digite a palavra a ser verificada\n").toLowerCase()

if (palavra.indexOf('a', 'e', 'i', 'o', 'u') == 1) {
    console.log("A palavra digitada possui vogais")

} else {
    console.log("A palavra digitada não possui vogais")
}

