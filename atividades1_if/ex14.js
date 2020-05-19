//Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var rs = require('readline-sync')

var num1 = rs.questionInt("Informe o primeiro número: ")
var num2 = rs.questionInt("Informe o segundo número: ")

if ( num1 % num2 == 0){
    console.log("\nDivisivel.") 
}
else {
    console.log("\nNão divisivel.") 
}