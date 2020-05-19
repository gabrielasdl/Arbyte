// Tendo como entrada a altura e o sexo codificado da seguinte forma: 
// 	Valor 1 para feminino
// 	 Valor 2 para masculino
// de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes 
// Fórmulas: 
// - para homens: (72.7 * Altura) – 58 
// - para mulheres: (62.1 * Altura) – 44.7 


var rs = require('readline-sync')

var sexo = rs.questionInt("DIGITTE 1 SE FOR DO SEXO FEMININO E 2 SE FOR DO SEXO MASCULINO: ")

if (sexo == 1) {
    var altf = rs.questionFloat("Informe sua altura: ")
    var pesoIdeal = ((62.1 * altf) - 44.7)
    console.log("Seu peso ideal é de: " + pesoIdeal.toFixed(2) + " KG")

} else {
    var altm = rs.questionFloat("Informe sua altura: ")
    var pesoIdeal = ((72.7 * altm) - 58)
    console.log("Seu peso ideal é de: " + pesoIdeal.toFixed(2) + " KG")

}


