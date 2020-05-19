/* Escreva uma função que recebe dois parâmetros numeroéricos e retorne o menor número. Solicite dois números para o usuário
e forneça como argumento para esta função. Escreva o resultado da função na tela dizendo qual menor número. */

var rs = require('readline-sync')

function menorNumero (numero1, numero2) {
    if (numero1 < numero2) {
        console.log("O número menor é o", numero1)
    } else if (numero2 < numero1) {
        console.log("O número menor é o", numero2)
    } else {
        console.log("Os números são iguais!")
    }
}

var num1 = rs.questionInt("Digite o primeiro número: ")
var num2 = rs.questionInt("Digite o segundo número: ")

menorNumero(num1, num2)