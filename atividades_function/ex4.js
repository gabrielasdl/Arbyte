/*Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a
tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
...
N x N = N2
Após isso solicite o usuário um número e forneça o argumento do usuário para a função.   */

var rs = require('readline-sync')


function tabuada(numero){
    for (i = 1; i <= numero; i++){
        var resultado = i * numero
        console.log(i,"X",num,"=",resultado)
    }
}

var num = rs.questionInt("Digite um número: ")

tabuada(num)   // chamando a função 