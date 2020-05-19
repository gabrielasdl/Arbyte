// Escreva um programa para ler o ano de nascimento de uma pessoa e 
// escrever uma mensagem que diga se ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que ela nasceu).


var rs = require('readline-sync')

var nasc = rs.questionInt("Informe seu ano de nascimento: ")
var hoje = new Date()   // new Date cria um objeto date com a data atual em que o programa sera rodado
var anoAtual = hoje.getFullYear() // getFullYear recupera apenas o ano da data atual
var idade = anoAtual - nasc 

if (idade > 15 && idade < 18 || idade >= 60) {
    console.log("Sua idade é " + idade + " anos: você pode votar, mas não é obrigatório!")

} else if (idade < 16) {

    console.log("Sua idade é " + idade +  " anos: você não pode votar!")

} else {
    console.log("Sua idade é " + idade + " anos: você e obrigado a votar!")
}
