// capturar numeros do usuario

var rs = require('readline-sync')


var num1 = rs.question('Qual e o primeiro numero? ')
var num2 = rs.question('Qual e o segundo numero?  ')

if (num1 > num2){
    console.log("O numero " + num1 + " e o maior numero")
} else if (num1 < num2){
        console.log("O numero " +  num2 + " e o maior numero")

} else {
        console.log("os numeros digitados sao iguais")
}
    
