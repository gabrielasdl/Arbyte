// Escreva um programa para ler 3 valores inteiros (considere que  não serão lidos valores iguais)
// e escrevê-los em ordem crescente. 

var rs = require('readline-sync')
var val1
var val2
var val3


console.log("Por favor, insira três valores diferentes! \n")
val1 = rs.questionInt("Informe o primeiro numero: ")
val2 = rs.questionInt("\nInforme o segundo numero: ")


while (true) {
    if (val2 == val1) {
        console.log("Valor igual ao primeiro valor informado. Por favor escolha outro valor. \n")
        val2 = rs.questionInt("Informe o segundo numero: ")

    } else {
        val3 = rs.questionInt("\nInforme o terceiro numero: ")
    }

    if (val3 == val2) {
        console.log("Valor igual ao segundo valor informado. Por favor escolha outro valor. \n")
        //val3 = rs.questionInt("Informe o terceiro numero: ")

    } else if (val3 != undefined) {
        break
    }

}

var lista = [val1, val2, val3]
var temp

for (i = 0; i < 3; i++) {
    for (j = i + 1; j < 3; j++) {
        if (lista[i] > lista[j]) {
            temp = lista[i]
            lista[i] = lista[j]
            lista[j] = temp
        }

    }
}

console.log( "\n Os valores em ordem crescente são: " + lista)
