/*Escreva um programa que simule uma partida de pedra papel e tesoura. Deve ser solicitado o nome do jogador A e do jogador B.
Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B. No final o programa deve imprimir quem ganhou.*/

var rs = require('readline-sync')

console.log("BEM VINDO AO JOGO")

var nomeA = rs.question("Informe o nome do JOGADOR A : ")
var nomeB = rs.question("Informe o nome do JOGADOR B : ")
var jogadaA = rs.keyIn(nomeA + " faça sua jogada: 1 PAPEL 2 PEDRA 3 TESOURA = ", { limit: '$<1-3>' })
var jogadaB = rs.keyIn(nomeB + " faça sua jogada: 1 PAPEL 2 PEDRA 3 TESOURA = ", { limit: '$<1-3>' })

if (jogadaA == 1 && jogadaB == 2 || jogadaA == 2 && jogadaB == 3 || jogadaA == 3 && jogadaB == 1) {
    console.log("\n" + nomeA.toUpperCase() + " GANHOU")

} else if (jogadaA == jogadaB) {
    console.log("\nempate")

} else {
    console.log("\n" + nomeB.toUpperCase() + " GANHOU")
}