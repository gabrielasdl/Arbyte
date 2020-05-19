/* 1. Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final exiba o preço de cada produto junto
com o valor total. após inserir todos os produtos o programa deve pedir o valor a ser pago, caso o valor passe do da compra
exibir o troco, se o valor for menor informar que a compra vai ser cancelada.
EX entradas :
0.75
0.25
2.50
Valor total pago: 5.00
O programa imprime :
Produto 1 - 0.75
Produto 2 - 0.25
Produtos 3 - 2.50
Total da compra : 3.50 $
Troco : 1.50 $  */

var rs = require('readline-sync')
var prod = []
var valor = []
var total = 0

var perg = rs.keyInYN("Deseja cadastrar o produto? ")

if (perg) {
    while (perg == true) {
        var p = rs.question("Produto: ")     
        prod.push(p)
        var v = rs.questionFloat("Valor: ") 
        valor.push(v)
        perg = rs.keyInYN("\nDeseja fazer outro cadastro? ")
        total = total + v
    }

    for (var i = 0; i < prod.length; i++) {
        console.log(prod[i] + " = " + valor[i].toFixed(2))
    }
    
    console.log(`\nValor total da compra: R$ ${total.toFixed(2)}`)
    var pag = rs.questionFloat("Pagamento: ")
    
    if (pag >= total) {
        console.log("\nCompra aprovada.\nSeu troco é: " + (pag - total).toFixed(2))
    } else {
        console.log("\nCompra cancelada. Pagamento insuficiente!")
    }
} else {
    console.log("Nao")
}