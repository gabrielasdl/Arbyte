// Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é 
//Acutângulo, Retângulo ou Obtusângulo. Sendo que: 
// − Triângulo Retângulo: possui um ângulo reto. (igual a 90º) 
// − Triângulo Obtusângulo: possui um ângulo obtuso. (maior que 90º) 
// − Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)


var rs = require('readline-sync')

var ang1 = rs.questionInt("Informe o valor do primeiro ângulo: ")
var ang2 = rs.questionInt("Informe o valor do segundo ângulo: ")
var ang3 = rs.questionInt("Informe o valor do terceiro ângulo: ")

if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
    console.log("\nÉ um TRIÂNGULO ACUTÂNGULO.")

} else if (ang1 > 90 || ang2 > 90 || ang3 > 90) {
    console.log("\nÉ um TRIÂNGULO OBTUSÂNGULO.")
}
else {
    console.log("\nÉ um TRIÂNGULO RETÂNGULO.")
}
console.log("\nFIM DO PROGRAMA!")