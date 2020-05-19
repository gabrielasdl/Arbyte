// Faça um programa que escreva na tela os números pares entre 0 e 50, usando um
// comando For. Não utilize nenhum IF/THEN neste programa, apenas o comando For-Do.

var rs = require('readline-sync')

for (i = 0; i <= 50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}
