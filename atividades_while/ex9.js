// Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
// EX: usuário informou BANANA
// Algoritmo imprime: ANANAB

var rs = require('readline-sync')

var palavra = rs.question("Digite a palavra: ")
var novaPalavra = ""
var i = palavra.length - 1

while (i >= 0) {
    novaPalavra = novaPalavra + palavra.charAt(i)
    i--
}
console.log(novaPalavra.toUpperCase())