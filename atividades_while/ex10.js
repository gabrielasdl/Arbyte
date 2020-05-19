// Faça um algoritmo que receba um número e imprima todos seus divisores.
// EX : usuário informou 21 O algoritmo imprime :
// 1
// 3
// 7
// 21

var rs = require('readline-sync')

var num = rs.questionInt("Digite um número: ")
var a = num - num

while (a <= num) {
    if (num % a == 0) {
       console.log(a)
    }
    a++
}
