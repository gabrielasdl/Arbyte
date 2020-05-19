/* Faça uma função que receba um número e retorne se é perfeito ou não. Após isso solicite ao usuário para inserir um número
e imprimir se é perfeito ou não utilizando a função e imprimindo o resultado no final. OBS: Um número perfeito é aquele
que a soma do seus divisores (auto excluindo) é igual a ele mesmo. Exemplo 6 possui os seguintes divisores 1 + 2 + 3 = 6 */

var rs = require('readline-sync')


function numeroPerfeito(numero) {
    var resultado = []
    var soma = 0
    for (var i = 1; i < numero; i++) {
        if (numero % i == 0) {
            resultado.push(i)
        }
    }
    for (i = 0; i < resultado.length; i++){  
        soma = soma + resultado[i]
    }
    if (soma == numero){
        return true
    }
    return false
}

var num = rs.questionInt("Digite um número para saber se ele é ou não é ABSOLUTO: ")

var absoluto = numeroPerfeito(num)  

if (absoluto){
    console.log("O número",num,"é um numero ABSOLUTO!")
} else {
    console.log("O número",num,"não é um numero ABSOLUTO!")
}