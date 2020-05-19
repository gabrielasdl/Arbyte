/*Criar um módulo que calcule a média de uma coleção de números. Para isso crie um arquivo chamado calcula-media.js.
No módulo exporte uma função media(arr) que recebe como argumento um array de números. A função deve iterar por esses
números e retornar sua média. Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
números, utilize o módulo criado para calcular a média e no final imprima o resultado para o usuário. */


var calculaMedia = require('./calcula-media')
var rs = require('readline-sync')
var arr = []

while (true) {
    var num = rs.questionInt('Digite numeros e retornarei a media deles: ')
    var novo = rs.keyInYN('Quer adicionar outro numero? ')
    arr.push(num)
    if (novo == false) {
        break
    }
}
console.log('A média é: ' + calculaMedia(arr).toFixed(2))