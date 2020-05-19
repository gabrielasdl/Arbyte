/*Faça um algoritmo que receba um número e diga se ele é primo ou não 
Utilize o pacote : https://www.npmjs.com/package/prime-number */

var isPrime = require('prime-number')
var rs = require ('readline-sync')

var num = rs.questionInt("Informe o número para saber se ele é um número primo: ")

var result = isPrime(num)
 
if(result){
    console.log("\nÉ um número primo!")

} else {
    console.log("\nNão é um número primo!")
}

