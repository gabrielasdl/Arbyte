// Faça um programa que calcule a potência (potenciação) de um número. Para isso ele deve receber dois números de entrada: 
//o primeiro número é a base da potência, o segundo número será a potência.
// EX: usuário inseriu 2 para base e 4 para potência.
// O programa imprime : 16

var rs = require('readline-sync')

var base = rs.questionInt("Digite o valor da base: ")
var potencia = rs.questionInt("Digite o valor da potencia: ")
var calculo = base ** potencia

console.log(calculo)

var perg = rs.question("\nDeseja fazer outro calculo?\nPara sim digite 1, para não digite 2: ")

while (perg == 1) {
    var base = rs.questionInt("Digite o valor da base: ")
    var potencia = rs.questionInt("Digite o valor da potencia: ")
    var calculo = base ** potencia

    console.log(calculo)
    var perg = rs.question("\nDeseja fazer outro calculo?\nPara sim digite 1, para não digite 2: ")
}

console.log("\nFIM DO PROGRAMA!")