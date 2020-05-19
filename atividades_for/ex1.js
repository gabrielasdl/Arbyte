// Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra (A) transforme ela em maiúscula
// EX: abelha
// O algoritmo imprime : AbelhA

 var rs = require('readline-sync')

var texto = rs.question("Digite seu texto: ")   
var tam = texto.length // .length descobre o tamanho de texto, ou seja, quantidade de caracteres e espaços
var textoFinal = texto

for (i = 0; i < tam; i++) {
    if (texto[i] == 'a') {
        var texto1 = textoFinal.substr(0, i) // o i não entra na contagem, o texto pega até antes da posição i 
        var texto2 = textoFinal.substr(i + 1, tam - 1)
        textoFinal = texto1 + texto[i].toUpperCase() + texto2
    }
}
console.log(textoFinal)
