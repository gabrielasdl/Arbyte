/* Faça um algoritmo que verifica se uma string comece com a palavra google. Caso comece imprima que a palavra é valida se
não diga que não conhece o serviço. EX: entrada Google drive O algoritmo imprime Palavra valida */

var rs = require('readline-sync')

var entrada = rs.question("Entrada: ").toLowerCase()

if(entrada.startsWith("google")){
    console.log ("Palavra valida!")

} else {
    console.log("Serviço não encontrado!")
}