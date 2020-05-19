// Faça um programa que recebe um número e imprima todos os números pares de 0 até o número inserido.
// Ex: usuário inseriu 8 O programa imprime
// 0
// 2
// 4
// 6
// 8

var rs = require('readline-sync')

var num = rs.questionInt("Digite um número: ")
var a = num - num

while (a <= num) {
    if (a % 2 == 0) {
        console.log(a)
    }
    a++ 
    
}