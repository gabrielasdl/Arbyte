/* (INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador.
Primeiro para o jogador A e depois para o jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números iguais que o jogador A e B colocaram.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3 */

var rs = require('readline-sync')
var a1 = []
var a2 = []
var cont = 0
var igual = []

var nome1 = rs.question("Informe o primeiro nome: ")
console.log("\nESCOLHA 5 NÚMERO ENTRE 1 E 10")
while (cont < 5) {
    var num1 = rs.questionInt((1 + cont) + "º número: ")
    a1.push(num1)
    cont++
}

cont = 0

var nome2 = rs.question("\nInforme o segundo nome: ")
console.log("\nESCOLHA 5 NÚMERO ENTRE 1 E 10")
while (cont < 5) {
    var num2 = rs.questionInt((1 + cont) + "º número: ")
    a2.push(num2)
    cont++
}

for (i = 0; i < a1.length; i++) {
    for (j = 0; j < a2.length; j++) {
        if (a1[i] == a2[j]) {
            igual.push(a1[i])
            j++
        }
    }
}


console.log("\n" + nome1 + ": " + a1)
console.log(nome2 + ": " + a2)
console.log("Os números iguais são:",igual.join())