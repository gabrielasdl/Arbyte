// Fazer um programa para receber um número e verificar se está entre 100 e 200. 
// Se estiver na faixa, imprimir: 
// Você digitou um numero entre 100 e 200.
//  Senão estiver na faixa, imprimir
// Você digitou um numero fora da faixa entre 100 e 200.

var rs = require('readline-sync')

var num = rs.questionInt("Digite um número entre 100 e 200: ")

if (num > 99 && num < 201) {
    console.log("Você digitou um numero entre 100 e 200. O número digitado foi: " + num)
}
else {
    console.log("\nVocê digitou um numero fora da faixa entre 100 e 200. O número digitado foi: " + num)
}
console.log("\nFIM DO PROGRAMA!")