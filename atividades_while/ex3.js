//Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.

var rs = require('readline-sync')
var num = 1

while (num < 101) {

    if (num % 2 == 1) {
        console.log(num)
    }
    num++
}