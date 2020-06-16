/* Escreva um programa que recebe como entrada uma frase (Ex.: “O rato roeu a roupa do rei de roma”) e exibe o resultado 
numa moldura de asteriscos, em que cada uma das palavras aparece numa linha. */

var rs = require('readline-sync')

var palavra = rs.question("Digite a frase: ")
var frase = palavra.split(" ")

function maiorPalavra(string) {
    var arrayStr = string.split(" ");
    var maior = 0;
    var palavra = null;
    arrayStr.forEach(function (str) {
        if (maior < str.length) {
            maior = str.length;
            palavra = str;
        }
    });
    return palavra;
}
var maior = maiorPalavra(palavra)

var cabecalho = ""
var tamLinha = maior.length + 4

for (var i = 0; i < tamLinha; i++) {
    cabecalho = cabecalho + "*"
}
console.log(cabecalho)

for (var i = 0; i < frase.length; i++) {
    var linha = "* " + frase[i]

    if (linha.length == tamLinha - 2) {

    } else {
        for (var j = linha.length; j < tamLinha - 2; j++) {
            linha = linha + " "
        }
    }
    console.log(linha, "*")
}

var rodape = ""
for (var i = 0; i < tamLinha; i++) {
    rodape = rodape + "*"
}
console.log(rodape)