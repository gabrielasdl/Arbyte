/*Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
palavra tem.
EX : saúde =   2 consoantes           3 vogais     */

var rs = require('readline-sync')


var vogais = ['a', 'e', 'i', 'o', 'u']
var palavra = rs.question("Digite uma palavra: ").toLowerCase()

var vogal = 0
var consoante = 0

for (var i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
        vogal = vogal + 1

    } else {
        consoante = consoante + 1
    }

}

console.log(palavra,"=", vogal, "vogais e", consoante, "consoantes.")
