/*   Escreva um programa que apresente quatro opções: (a) consulta saldo, (b) saque e (c) depósito e (d) sair.
O saldo deve iniciar em R$ 0,00. A cada saque ou depósito o valor do saldo deve ser atualizado.  */

var rs = require('readline-sync')

var saldo = 0
var saque = 0 
var deposito = 0 

console.log("BEM VINDO AO SEU BANCO DIGITAL.")
var resp = rs.question("\nESCOLHA O QUE DESEJA FAZER: \n(a) Consultar saldo \n(b) Saque \n(c) Depósito \n(d) Sair\n").toLowerCase()

while (resp != 'a' && resp != 'b' && resp != 'c' && resp != 'd') {
    console.log("OPÇÃO INVALIDA!")
    resp = rs.question("\nESCOLHA O QUE DESEJA FAZER: \n(a) Consultar saldo \n(b) Saque \n(c) Depósito \n(d) Sair\n").toLowerCase()
}

while (resp != 'd') {
    if (resp == 'a') {
        console.log("SALDO: R$ " + saldo.toFixed(2))
        resp = rs.question("\nDESEJA REALIZAR OUTRA OPERAÇÃO?: \n(a) Consultar saldo \n(b) Saque \n(c) Depósito \n(d) Sair\n").toLowerCase()

    } else if (resp == 'b') {
        saque = rs.questionFloat("\nQuanto deseja sacar ? \n")
        if (saque > saldo) {
            console.log("Quantia indisponível.")
            console.log("Seu saldo em conta é de : R$ " + saldo.toFixed(2))
            resp = rs.question("\nDESEJA REALIZAR OUTRA OPERAÇÃO?: \n(a) Consultar saldo \n(b) Saque \n(c) Depósito \n(d) Sair\n").toLowerCase()

        } else {
            console.log("Retire o dinheiro.")
            saldo = saldo - saque
            console.log("Seu saldo em conta é de : R$ " + saldo.toFixed(2))
            resp = rs.question("\nDESEJA REALIZAR OUTRA OPERAÇÃO?: \n(a) Consultar saldo \n(b) Saque \n(c) Depósito \n(d) Sair\n").toLowerCase()
        }

    } else if (resp == 'c') {
        deposito = rs.questionFloat("Qual o valor do depósito ?\n")
        saldo = saldo + deposito
        console.log("Seu saldo em conta é de : R$ " + saldo.toFixed(2))
        resp = rs.question("\nDESEJA REALIZAR OUTRA OPERAÇÃO?: \n(a) Consultar saldo \n(b) Saque \n(c) Depósito \n(d) Sair\n").toLowerCase()

    } else {
        console.log("FIM")
        break
    }
}