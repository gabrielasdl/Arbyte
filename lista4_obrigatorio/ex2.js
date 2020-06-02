/* Escreva um programa que passe por todos os números de 1 a 50 e para cada um deles imprima na tela se o número é par ou ímpar.
Caso o número também seja primo, o programa deve dizer que ele é primo. (um número primo é um número que só é divisível por 
ele mesmo e por 1). Dica: Neste exercício você pode precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar
mais de um loop */

//var cont = 1
var num = 1

while (num <= 50) {

    if (num % 2 == 0) {
        console.log(num + " = PAR")

    } else {
        console.log(num + " = IMPAR")
    }

    if (num >= 2) {
        contPrimo = 2
        ePrimo = true

        while (contPrimo < num) {
            if (num % contPrimo == 0) {
                ePrimo = false
                break
            }
            contPrimo++
        }

        if (ePrimo) {
            console.log("\n" +num+ " = primo")
        }
    }

    num++
}


// ARRUMAR //