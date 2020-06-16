/* Faça um algoritmo que recebe um número de entrada e escreve ele por extenso. Os valores aceitos são de 1 até
1.000.000.000 (1 bilhão)
Exemplos: 1502 -> mil quenhentos e dois  --    123015 -> cento e vinte e três mil e quinze */

var rs = require('readline-sync')

var unidade = ["um", "dois", "três", "quatro", "cinco",
    "seis", "sete", "oito", "nove", "dez", "onze",
    "doze", "treze", "quatorze", "quinze", "dezesseis",
    "dezessete", "dezoito", "dezenove"]

var dezena = ["vinte", "trinta", "quarenta", "cinquenta",
    "sessenta", "setenta", "oitenta", "noventa"]

var centena = ["cento", "duzentos", "trezentos",
    "quatrocentos", "quinhentos", "seiscentos",
    "setecentos", "oitocentos", "novecentos"]

    
    

var num = rs.questionInt("Informe o número: ")


