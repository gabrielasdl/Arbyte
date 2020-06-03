/* Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou descriptografar. Utilize como criptografia a cifra de césar
Exemplo ->        Entrada : ARBYTE             SAIDA: DUEBWH
Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar o valor criptografado
Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e retorna ao valor antes de criptografia. */

var rs = require('readline-sync')

var texto = rs.question("texto de entrada: ")
var resp = rs.questionInt("1 = CRIPTOGRAFAR \n2 = DESCRIPTOGRAFAR\n")
var entrada = ''

if(resp == 1){

}