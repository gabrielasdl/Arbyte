/*Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente esses valores, guardando-os num vetor e
depois exibindo para o usuário. Para esta atividade tente usar o algoritmo Bubble Sort (Método da bolha) */

var rs = require('readline-sync')

function ordemNum(a,b){
    return (a-b)
}

var ordem = []
for (i = 0; i < 10; i++){
    var num = rs.questionInt("Digite o "+ (i+1)+ "º número: ")
    ordem.push(num)

}
console.log(ordem.sort(ordemNum).join())