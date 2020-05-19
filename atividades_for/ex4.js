// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre estas notas (A tem 30% do peso do
//grau final e B tem 70% do peso). Repetir este procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:
// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0 (5 - 30% = 1,5)
// Entre com o grau B: 6.0 (6 - 70% = 4,2)
// O aluno João da Silva tem uma média:5.7

var rs = require('readline-sync')

for (i = 0; i < 5; i++){
var aluno = rs.question("\nInforme o nome do aluno: ")
var nota1 = rs.questionFloat("Informe a primeira nota: ")
var nota2 = rs.questionFloat("Informe a segunda nota: ")
var media = ((nota1 * 0.30) + (nota2 * 0.70))
console.log("\nAluna(o):",aluno, "\nMédia:", media.toFixed(1))
}