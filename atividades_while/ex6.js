// Faça um programa que pergunta ao usuário :
// “Insira 0 para sair ou qualquer outra tecla para o continuar.”
// Se o usuário inserir 0 o programa encerra.
// Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
// “Insira 0 para sair ou qualquer outro número para o continuar.”
// Até o usuário sair

var rs = require('readline-sync')

var resp = rs.question("Insira 0 para SAIR ou qualquer outra tecla para CONTINUAR: ")

while (resp != 0) {
    var resp = rs.questionInt("\nInsira 0 para SAIR ou qualquer outro numero para CONTINUAR: ")

}
console.log("\nVOCÊ SAIU DO PROGRAMA!")