// Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
// usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
// outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.

var rs = require('readline-sync')

var num = rs.questionInt("Digite o número: ")

for(i = 0; ; i++){
    if(perg == 1){
        var perg = rs.questionInt("Digite 1 se deseja repetir e 2 se deseja parar: ")
        var fat = (num) * (num - 1) 
        console.log(fat)

    }else{
        break
    }
}
