/*Escreva um programa que pedirá para o usuário dois números entre 1 e 100. O programa deve, então, iterar de um em um do 
menor pro maior, sempre imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7, o programa
deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível por 5, o programa deve imprimir “Pong”. Caso
o número seja divisível por 7 e 5, o programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um input do usuário de string para inteiro.*/

var rs = require('readline-sync')

console.log("INSIRA DOIS NÚMERO ENTRE 1 E 100")
var num1 = rs.questionInt("\nInsira o primeiro número: ")
var num2 = rs.questionInt("Insira o segundo número: ")

while (num1 < 1 || num1 > 100 && num2 < 1 || num2 > 100) {
    console.log("\n********** NÚMEROS INVALIDOS. **********\nINSIRA DOIS NÚMERO ENTRE 1 E 100\n")
    var num1 = rs.questionInt("Insira o primeiro número: ")
    var num2 = rs.questionInt("Insira o segundo número: ")
}

if (num1 < num2) {
    for (var i = num1; i <= num2; i++) {
        if (i % 5 == 0 && i % 7 == 0) {
            console.log(i, "PING-PONG")
        } else if (i % 5 == 0) {
            console.log(i, "PONG")
        } else if (i % 7 == 0) {
            console.log(i, "PING")
        } else {
            console.log(i)
        }
    }
} else {
    for (var i = num1; i >= num2; i--) {
        if (i % 5 == 0 && i % 7 == 0) {
            console.log(i, "PING-PONG")
        } else if (i % 5 == 0) {
            console.log(i, "PONG")
        } else if (i % 7 == 0) {
            console.log(i, "PING")
        } else {
            console.log(i)
        }
    }
}