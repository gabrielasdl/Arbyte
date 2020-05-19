// Elabore um algoritmo que calcule o que deve ser pago por um produto,
// solicitando o preço da etiqueta do produto e a escolha da condição de
// pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
// pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento
// - 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// - 2 À vista no cartão de crédito, recebe 15% de desconto
// - 3 Em duas vezes, preço normal de etiqueta sem juros
// - 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

var rs = require('readline-sync')

var valor = rs.questionFloat("Informe o valor da etiqueta: ")
console.log("\nEssas são as condicão de pagamento:\n• À vista em dinheiro ou cheque, recebe 10% de desconto"
    + "\n• À vista no cartão de crédito, recebe 15% de desconto \n• Em duas vezes, preço normal de etiqueta sem juros"
    + "\n• Em duas vezes, preço normal de etiqueta mais juros de 10%\n")
var pag = rs.questionInt("\nEscolha a forma do pagamento:\n1- Dinheiro ou Cheque \n2- Cartão de crédito a vista"
    + "\n3- Cartão de crédito a prazo (2x)\n4- Cartão de crédito a prazo (2x) + 10% juros\n")

while (pag < 1 || pag > 4) {
    var pag = rs.questionInt("\n OPÇÃO INVALIDA! \nEscolha a forma do pagamento novamente:\n1- Dinheiro ou Cheque \n2- Cartão de crédito a vista"
        + "\n3- Cartão de crédito a prazo (2x)\n4- Cartão de crédito a prazo (2x) + 10% juros\n")
}

if (pag == 1) {
    console.log("\nO valor a ser pago é de R$ " + (valor * 0.90).toFixed(2)) // 0.90 representa 90%

} else if (pag == 2) {
    console.log("\nO valor a ser pago é de R$ " + (valor * 0.85).toFixed(2))

} else if (pag == 3) {
    console.log("\nO valor total a ser pago é de R$ " + valor.toFixed(2) + " , e as parcelas serão de R$ " + (valor / 2).toFixed(2) + " cada parcela.")

} else {
    var val = (valor * 0.10) + valor
    console.log("\nO valor total a ser pago é de R$ " + val.toFixed(2) + " , e as parcelas serão de R$ " + (val / 2).toFixed(2) + " cada parcela.")
}
