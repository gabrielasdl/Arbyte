/*Criar um algoritmo que receba 2 carros e verifique se os carros são iguais. Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. */

var rs = require('readline-sync')


class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca       
        this.modelo = modelo  
        this.cor = cor 
    }
}

console.log("Informe as caracteriticas do PRIMEIRO carro:")
var marca = rs.question("Marca: ")  
var modelo = rs.question("Modelo: ")  
var cor = rs.question("Cor: ") 
console.log("\nInforme as caracteriticas do SEGUNDO carro:")
var marca1 = rs.question("Marca: ") 
var modelo1 = rs.question("Modelo: ")  
var cor1 = rs.question("Cor: ")  

var car = new Carro(marca,modelo,cor)     
var car1 = new Carro(marca1,modelo1,cor1)  

if (car.modelo == car1.modelo && car.marca == car1.marca){
    console.log("\nOs carros são iguais!")

} else {
    console.log("\nOs carros não são iguais!")
}

//////////// terminarrrrrr