/*Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o valor seja
primo e Falso em caso contrário. Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
condição IF.  */

var rs = require('readline-sync')


function ehPrimo(numero) {
   for (i = 2; i < numero; i++){
       if(numero % 2 == 0){
           return "NÃO É PRIMO"
       }
   }
   return "É PRIMO"
}

var num = rs.questionInt("Digite um valor inteiro positivo: ")


if (num < 0) {
    var num = rs.questionInt("NÚMERO NEGATIVO\nDigite outro valor INTEIRO e NEGATIVO: ")

} else {
    console.log(ehPrimo(num))
}