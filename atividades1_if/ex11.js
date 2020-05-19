// Faça um programa que receba três notas, calcule e mostre a média aritmética entre elas, caso a média aritmética seja:
// 	Media maior ou igual a 7 imprimir : 
// 		 ALUNO APROVADO 
// Media menor que 7 imprimir : 
// 		 ALUNO REPROVADO

var rs = require('readline-sync')

var nota1 = rs.questionFloat("Informe a primeira nota: ")
var nota2 = rs.questionFloat("Informe a segunda nota: ")
var nota3 = rs.questionFloat("Informe a terceira nota: ")

var media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    console.log("\nALUNO APROVADO")
    console.log("\n A sua média é: " + media.toFixed(2))
}
else {
    console.log("\nALUNO REPROVADO")
    console.log("\n A sua média é: " + media.toFixed(2))
}
console.log("\nFIM DO PROGRAMA!")