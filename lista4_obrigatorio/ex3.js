//  Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:
// *
// ** 
// *** 
// **** 
// *****
// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5)

var rs = require('readline-sync')
var ast = "*"
var resp = " "
var n = rs.questionInt("Digite um número maior que 0: ")

while (n == 0) {
    var n = rs.questionInt("\nO NÚMERO DEVE SER MAIOR QUE 0 \nDigite novamente: ")
}

for (var i = 0; i < n; i++) {
    resp = resp + ast
    console.log(resp)
}