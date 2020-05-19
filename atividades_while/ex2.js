// Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM usar o operador de multiplicação

var rs = require('readline-sync')

var num1 = rs.questionInt("Informe o primeiro número: ")
var num2 = rs.questionInt("Informe o segundo número: ")
var resultado =0

while(num1 > 0){
    var soma = num2 + resultado
    resultado = soma
    num1--
}
console.log(resultado)