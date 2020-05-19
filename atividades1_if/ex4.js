// As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.
// Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

var rs = require('readline-sync')

var quant = rs.questionInt("Quantas maças vocês ira comprar? ")

if ( quant < 12) {
    valor = (quant * 0.30) 
    console.log("O valor da sua compra é de R$: " + valor.toFixed(2))
   
} else {
    valor = (quant * 0.25) 
    console.log("O valor da sua compra é de R$: " + valor.toFixed(2))
}