// Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000.

var n = 1
var resultado = 0

while (n <= 1000) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log(n+" É um multiplo de 3 e 5")
        resultado = resultado + n
    }
    n++ 
}
console.log("\nE a soma desses número é igual a = "+resultado)