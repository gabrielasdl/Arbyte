// Faça um programa que receba um nome e imprima a terceira letra do nome. Utilize o método charAt() para esta atividade.

var rs = require('readline-sync')

var nome = rs.question("Digite um nome: ")

if (nome.charAt(2) == " ") {
    console.log("\nEspaço em branco.")
} else {
    console.log("\n"+nome.charAt(2))
}