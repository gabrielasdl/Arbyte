// Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha.
// EX: usuário informou MAÇÃ O algoritmo imprime:
// M
// A
// Ç
// Ã

var rs = require('readline-sync')

var palavra = rs.question("Digite a palavra: ")
var tam = palavra.length

var cont = 0;
while (cont < tam) {
    console.log(palavra[cont])
    cont++
}
