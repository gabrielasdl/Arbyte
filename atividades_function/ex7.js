/* Faça uma função que recebe um número e devolve seu valor absoluto. No final peça um número para o usuário e exiba
 o valor absoluto.   */


 ////////// OS 2 CÓDIGOS FUNCIONAM /////////////

var rs = require('readline-sync')


// var resultado 
// function valorAbsoluto(numero) {
//     resultado = Math.abs(numero) // ABS() é uma função que retorna o valor aboluto de um número
//     return resultado
// }
// var valor = rs.questionInt("Informe um número para saber seu valor absoluto: ")

// console.log("O valor absoluto de", valor, "é", valorAbsoluto(valor))


var resultado = 0
function valorAbsoluto(numero) {
    if (numero < 0) {
        while (numero < 0) {
            resultado = resultado + 1
            numero++
        }
    } else {
        while (numero > 0) {
            resultado = resultado + 1
            numero--
        }
    }
    return resultado
}
var valor = rs.questionInt("Informe um número para saber seu valor absoluto: ")

console.log("O valor absoluto de", valor, "é", valorAbsoluto(valor))
