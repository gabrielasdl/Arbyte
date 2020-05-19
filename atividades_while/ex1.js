// Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
// de acordo com o número inserido.
// EX: usuário inseriu 3
// O programa imprime:
// BIP BIP
// BIP BIP
// BIP BIP

var rs = require('readline-sync')

var num = rs.questionInt("Digite um número: ") 

var cont = 0
while (cont < num ) {
    console.log("BIP BIP")
    cont++
}

if (num == 0) {
    console.log("\nVocê inseriu numero 0 e caiu fora do programa!")

} else if (num < 0) {
    console.log("\nVocê inseriu um numero negativo e caiu fora do programa!")
}
