/*Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de um possuir maior idade apresentar 
o nome de todos os que possuem maior idade. Para isso crie uma classe Aluno que receba duas variáveis no construtor nome
e idade e inicialize essas variáveis nas propriedades do objeto. Após isso peça para o usuário cadastrar o primeiro aluno
e solicite nome e idade. Crie o objeto do aluno e adicione em um array. Repita esse passo para os outros alunos.
Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos com maior idade e imprimir seus nomes.*/

var rs = require('readline-sync')

class Aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

var nome = rs.question("Nome do aluno: ")
var idade = rs.questionInt("Idade do aluno: ")

var nome2 = rs.question("Nome do aluno: ")
var idade2 = rs.questionInt("Idade do aluno: ")

var nome3 = rs.question("Nome do aluno: ")
var idade3 = rs.questionInt("Idade do aluno: ")


var pessoa1 = new Aluno(nome, idade)
var pessoa2 = new Aluno(nome2, idade2)
var pessoa3 = new Aluno(nome3, idade3)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)