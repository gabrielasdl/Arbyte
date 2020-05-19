/* Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a média no final.
Utilize o pacote : https://www.npmjs.com/package/median */

var median = require('median')
var average = require('average')
var rs = require('readline-sync')

var notas = []
var cont = 0
while (cont < 4) {
    var nota1 = rs.questionFloat("Digite a " + (cont + 1) + "º nota: ")
    notas.push(nota1)
    cont++
}

var mediana = median(notas)
var media = average(notas)

console.log(`\nA MÉDIA É ${media.toFixed(2)}`)
console.log(`A MEDIANA É ${mediana.toFixed(2)}`)