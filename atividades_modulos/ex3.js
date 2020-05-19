// Faça um algoritmo que receba um número e diga se ele é par ou ímpar 
//Utilize o pacote : https://www.npmjs.com/package/is-odd


var isOdd = require('is-odd')
var rs = require('readline-sync')

var perg = rs.keyInYN("Desejar informar um número para saber se é par ou impar  ")

while (perg == true) {

var num = rs.questionInt("\nQual o número : ")

    if (!isOdd(num)) {
        console.log("\nNúmero Par")

    } else {
        console.log("\nNúmero Impar")
    }

    var perg = rs.keyInYN("\nDesejar informar outro número ")

}