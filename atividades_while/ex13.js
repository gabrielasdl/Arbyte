// Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e a soma dos pares
// EX: valores fornecidos 1,2,3,4,5
// Impares -> 1 * 3 * 5 = 15
// Pares -> 2 + 4 = 6
// O programa imprime :
// Produtos dos impares : 15
// Soma dos pares : 6

var rs = require('readline-sync')
var cont = 0
var soma = 0 
var mult = 1

while (cont < 5) {
    var a = 1 + cont
    var num = rs.questionInt("Digite o " + a +"º numero: ")
    if (num % 2 == 0){
        soma = soma + num

    } else {
         mult = mult * num
    }
    cont++
}
console.log("\nA soma dos número pares digitados é:",soma)
console.log("O produto dos números impares digitados é:",mult)

