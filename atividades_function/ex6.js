/* Escreva uma função que receba dois números o primeiro será a base e o segundo a potência e no final a função retorna a
base elevada pela potência. Faça um programa que peça ao usuário a base e a potência e forneça para a função, no final
imprima o resultado. OBS: O algoritmo só precisa saber lidar com números inteiros. */

var rs = require('readline-sync')

function potencia(base, potencia) {
    var resultado = base ** potencia
    return resultado
}

var num1 = rs.questionInt("Informe o valor da base: ")
var num2 = rs.questionInt("Informe o valor da potencia: ")

console.log("a potencia de", num1, "elevado a", num2, "é igual a", potencia(num1, num2))