/* Crie um programa que peça o usuário N números e, quando o usuário digitar -1, imprima o maior e o menor, sem levar em
consideração o -1 */

var rs = require('readline-sync')
var a = []

while (true) {
    var n = rs.questionInt("Digite um número: ")
    a.push(n)
    if (n == -1) {
        a.pop(n)
        break
    }
}

console.log("O menor número é =  "+Math.min.apply(Math, a))
console.log("O maior número é =  "+Math.max.apply(Math, a))
