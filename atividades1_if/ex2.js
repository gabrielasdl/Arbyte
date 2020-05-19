//Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar.

var rs = require('readline-sync')

var num = rs.questionInt("Digite um numero aleatorio para saber se é PAR ou ÍMPAR: ")

if ( num % 2 == 0){ // numero dividido por 2 para saber se tem resto ou não 
    console.log("O numero digitado é par!")

}
    else {
        console.log("O numero digitado é impar!")
    }