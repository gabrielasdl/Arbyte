// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa.
// Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 

var rs = require('readline-sync')

var nome = rs.question("Digite seu nome: ")
var sexo = rs.question("Informe seu sexo - F para feminino e M para masculino: ")

while (sexo.toUpperCase() != 'F' && sexo.toUpperCase() != 'M') {
    var sexo = rs.question("Informação Incorreta - F para feminino e M para masculino: ")
}

var ecivil = rs.question("Digite seu estado civil: ")

while (ecivil.toUpperCase() != 'CASADA' && ecivil.toUpperCase() != 'CASADO') {
    var ecivil = rs.question("Digite seu estado civil novamente: ")
}

if (sexo.toUpperCase() == 'F' && ecivil.toUpperCase() == 'CASADA') {
    var tempo = rs.question("Informe seu tempo de casada: ")
}

else {
    console.log("FIM DO PROGRAMA!")
}

console.log("FIM DO PROGRAMA!")
