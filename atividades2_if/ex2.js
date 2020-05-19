// Faça um programa onde o usuário irá escolher se quer Converter graus Celsius
// para Fahrenheit ou Fahrenheit para Celsius.

var rs = require('readline-sync')

var valor = rs.questionFloat("Digite a temperatura: ")
var graus = rs.question("\nESCOLHA - \n1 para converter Celsius em Fahrenheit \n2 para converte Fahrenheit em Celsius: ")


while (graus != 1 && graus != 2) {
    var graus = rs.question("\nESCOLHA NOVAMENTE - \n1 para converter Celsius em Fahrenheit \n2 para converte Fahrenheit em Celsius: ")
}

if (graus == 1) {
    var conv = (valor * 9 / 5) + 32
    console.log("\nO valor convertido é de " + conv + "º Fahrenheit")

} else {
    var conv = (valor - 32) * (5 / 9)
    console.log("\nO valor convertido é de " + conv + "º Celsius")
}
