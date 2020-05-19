/*Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias. Solicite a
data ao usuário e o algoritmo imprime a quantidade de dias como resultado utilizando a função criada.*/

var rs = require('readline-sync')

function idadeEmDias(ano, mes, dia) {
    var total = (anos * 365) + (meses * 30) + dias
    return total
}

var anos = rs.questionInt("Quantos anos de vida: ")
var meses = rs.questionInt("Quantos meses de vida: ")
var dias = rs.questionInt("Quantos dias de vida: ")

console.log(idadeEmDias(anos, meses, dias))
