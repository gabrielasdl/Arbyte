// Faça um programa que leia o valor de um produto X e leia a quantidade de reais de um cofrinho que contenha:
// a. N moedas de 1 real;
// b. N moedas de 50 centavos;
// c. N moedas de 25 centavos;
// d. N moedas de 10 centavos;
// e. N moedas de 5 centavos;
// f. N moedas de 1 centavos.
// O programa deverá verificar se o total de reais que contém no cofrinho é o 
//bastante para compra o produto X e imprimir se possui ou não valor suficiente

var rs = require('readline-sync')

var produto = rs.questionFloat("Informe o valor do produto: ")
console.log("\nINFORME OS VALORES DO COFRINHO\n")

var moeda1 = rs.questionInt("Informe a quantidade de moeda de R$ 1,00 : ")
var moeda2 = rs.questionInt("Informe a quantidade de moeda de R$ 0,50 : ")
var moeda3 = rs.questionInt("Informe a quantidade de moeda de R$ 0,25 : ")
var moeda4 = rs.questionInt("Informe a quantidade de moeda de R$ 0,10 : ")
var moeda5 = rs.questionInt("Informe a quantidade de moeda de R$ 0,05 : ")
var moeda6 = rs.questionInt("Informe a quantidade de moeda de R$ 0,01 : ")

var cofre = (moeda1 * 1.00) + (moeda2 * 0.50) + (moeda3 * 0.25) + (moeda4 * 0.10) + (moeda5 * 0.05) + (moeda6 * 0.01)

if ( produto < cofre){
    console.log("\nVocê possui dinheiro suficiente para comprar o produto !")
    var sobra = cofre - produto
    console.log("\nVocê tinha no seu cofre R$",cofre.toFixed(2),"e ainda sobrou R$",sobra.toFixed(2))

} else {
    console.log("\nVocê não possui dinheiro suficiente para comprar o produto !")
    var falta = produto - cofre
    console.log("\nVocê tem no seu sofre R$",cofre.toFixed(2),"e ainda falta R$",falta.toFixed(2))
}


