//Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir qual é a menor idade.

var rs = require('readline-sync')

var cont = 0
var menor = Number.MAX_SAFE_INTEGER

while (cont < 8) {
    var num = 1 + cont
    var idade = rs.questionInt("Digite a " + num + "º idade: ")  

    if (idade <= menor) {
        menor = idade 
    }
    cont++
}

console.log("\nA menor idade digitada é:", menor, "anos")