// Uma empresa abriu uma linha de crédito para os funcionários.
// O valor da prestação não pode ultrapassar 30% do salário.
// Faça um programa que receba o salário, o valor do empréstimo e o número de
// prestações e informe se o empréstimo pode ser concedido.

var rs = require('readline-sync')

var salario = rs.questionFloat("Informe o valor do seu salario: R$ ")
var emprestimo = rs.questionFloat("Informe o valor do empréstimo: R$ ")
var prestacao = rs.questionInt("Informe o número de prestações: ")

if ((emprestimo / prestacao).toFixed(2) > (salario * 0.30)) {
    console.log("\nPara fazer o empréstimo você não pode comprometer mais do que 30% da sua renda em cada prestação." + 
    "\nO valor da sua prestação é de R$",(emprestimo / prestacao).toFixed(2),"e 30% do seu salário é R$",(salario * 0.30).toFixed(2))

} else {
    console.log("Você conseguiu realizar o empréstimo." +
    "\nO valor da sua prestação é de R$",(emprestimo / prestacao).toFixed(2),"e 30% do seu salário é R$",(salario * 0.30).toFixed(2))
    
}