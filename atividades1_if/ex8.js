// Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é Equilátero, Isósceles ou Escaleno. 
// 	Sendo que: 
// − Triângulo Equilátero: possui os 3 lados iguais. 
// − Triângulo Isóscele: possui 2 lados iguais. 
// − Triângulo Escaleno: possui 3 lados diferentes. 

var rs = require('readline-sync')

var lado1 = rs.questionFloat("Informe o tamanho do primeiro lado: ")
var lado2 = rs.questionFloat("Informe o tamanho do segundo lado: ")
var lado3 = rs.questionFloat("Informe o tamanho do terceiro lado: ")

if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("\nO triângulo é ESCALENO!")

} else if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
    console.log("\nO triângulo é EQUILÁTERO!")

}
else {
    console.log("\nO triângulo é ISÓCELES!")
}

console.log("\nFIM DO PROGRAMA!")