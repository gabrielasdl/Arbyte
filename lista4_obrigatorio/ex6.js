/*Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na tela (EX.: “O nome digitado foi:
Robson”.). O programa deve ser interrompido quando o usuário digitar o nome “Final”. No final, o programa deve imprimir o
número de usuários que foram cadastrados no total.*/

var rs = require('readline-sync')

var nome = rs.question("Informe o nome: ")
var idade = rs.questionInt("Informe a idade: ")
console.log("O nome digitado foi: ",nome)
var perg = rs.keyInYN("\nDeseja cadastrar outra pessoa? ")


while (perg) {
    nome = rs.question("Informe o nome: ")
    var idade = rs.questionInt("Informe a idade: ")
    console.log("O nome digitado foi: ",nome)
    var perg = rs.keyInYN("\nDeseja cadastrar outra pessoa? ")
}
