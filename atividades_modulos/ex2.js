/* Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc  */

var fc = require("fasam-imc-calc")
var rs = require('readline-sync')

var peso = rs.questionFloat("Informe seu peso: ")
var altura = rs.questionFloat("Informe sua altura: ")

var imc = new fc()
var resultado = imc.calc(peso, altura)

console.log(`\nSeu imc é: ${resultado}`)

if(resultado < 17){
    console.log("Muito abaixo do peso.")
    console.log("O que pode acontecer: Queda de cabelo, infertilidade, ausência menstrual")

} else if (resultado >= 17 && resultado < 18.5){
    console.log("Abaixo do peso.")
    console.log("O que pode acontecer: Fadiga, stress, ansiedade")

} else if (resultado >= 18.5 && resultado < 25){
    console.log("Peso Normal.")
    console.log("O que pode acontecer: Menor risco de doenças cardíacas e vasculares")

} else if(resultado >= 25 && resultado < 30){
    console.log("Acima do peso.")
    console.log("O que pode acontecer: Fadiga, má circulação, varizes")

}else if(resultado >= 30 && resultado < 35){
    console.log("Obesidade Grau I.")
    console.log("O que pode acontecer: Diabetes, angina, infarto, aterosclerose")

} else if(resultado >= 35 && resultado < 41 ){
    console.log("Obesidade Grau II.")
    console.log("O que pode acontecer: Apneia do sono, falta de ar")

} else {
    console.log("Obesidade Grau III.")
    console.log("O que pode acontecer: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC")
}