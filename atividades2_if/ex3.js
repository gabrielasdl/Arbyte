// Fazer um programa que leia um valor de DDI e informe o nome do país Correspondente ao DDI. Por exemplo:
// Se lê 1 imprime "Estados Unidos",
// Se lê 49 imprime "Alemanha",
// Se lê 54 imprime "Argentina",
// Se lê 55 imprime "Brasil",
// Se lê 35 imprime "Portugal".
//Deve também imprimir uma mensagem caso o DDI não esteja cadastrado.

var rs = require('readline-sync')

var ddi = rs.questionInt("Informe o número do DDI:  ")

while (ddi != 1 && ddi != 49 && ddi != 54 && ddi != 55 & ddi != 35) {
    console.log("\nDDI NÃO CADASTRADO!\n")
    var ddi = rs.questionInt("Informe o número do DDI novamente:  ")
}

if (ddi == 1) {
    console.log("\nEstados Unidos")

} else if (ddi == 49) {
    console.log("\nAlemanha")

} else if (ddi == 54) {
    console.log("\nArgentina")

} else if (ddi == 55) {
    console.log("\nBrasil")

} else {
    console.log("\nPortugal")
}

