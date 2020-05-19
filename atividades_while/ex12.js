// Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos números fornecidos.

var rs = require('readline-sync')

cont= 0
var media = 0
while(cont < 15){ 
    var num = 1 + cont
    var numero = rs.questionInt("Insira o " + num + "º número: ")
    media = media + numero

    cont++
}
console.log("\nA média é: " + (media/15))