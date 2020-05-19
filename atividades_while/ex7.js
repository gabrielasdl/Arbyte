// Faça um programa que pergunte ao usuário escolher duas opções A e B.
// A encerra o programa, B é pra fazer uma soma.
// a. Se o usuário inserir A o programa fecha
// b. Se o usuário inserir B o programa vai realizar uma operação de soma,
// solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
// segundo número o algoritmo deve apresentar a soma e também pergunta se
// quer realizar outro cálculo.
// c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
// que não entendeu o comando e solicitar novamente para inserir A ou B

var rs = require('readline-sync')

var perg = rs.question("A = encerrar o programa: \nB= realizar soma:\n")

while (perg.toUpperCase() != 'A' && perg.toUpperCase() != 'B') {
    var perg = rs.question("\nRESPOSTA INVALIDA! Escolha novamente:\nA = encerrar o programa: \nB= realizar soma:\n")
}

while (true) {
    if (perg.toUpperCase() == 'B') {
        var n1 = rs.questionInt("Informe o primeiro número: ")
        var n2 = rs.questionInt("Informe o segundo número: ")
        console.log("A soma dos número é: ", n1 + n2)
        var perg1 = rs.question("\nDeseja realizar outra soma? digite 1 para sim e 2 para não: ")

    } else {
        console.log("\nVOCÊ ESCOLHEU ENCERRAR")

    }

    while (perg1 == 1) {
        var n1 = rs.questionInt("\nInforme o primeiro número: ")
        var n2 = rs.questionInt("Informe o segundo número: ")
        console.log("A soma dos número é: ", n1 + n2)
        var perg1 = rs.question("\nDeseja realizar outra soma? digite 1 para sim e 2 para não: ")

    }
    break
}

console.log("\nFIM DO PROGRAMA")
