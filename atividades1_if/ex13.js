//Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

var rs = require('readline-sync')

var num = rs.questionFloat("Informe o número: ")

if (num >= 0) {
    var dobro = num * 2
    console.log("\nO número é positivo e o dobro dele é: " + dobro)
} else {
    var triplo = num * 3
    console.log("\nO número é negativo e o triplo dele é: " + triplo)
}


