/* Escolha um programa que você já fez em atividades passadas e faça o output do
terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk */

var chalk = require('chalk');
var fc = require("fasam-imc-calc")
var rs = require('readline-sync')

var peso = rs.questionFloat("Informe seu peso: ")
var altura = rs.questionFloat("Informe sua altura: ")

var imc = new fc()
var resultado = imc.calc(peso, altura)

console.log(`\nSeu imc é: ${resultado}`)

if(resultado < 17){
    console.log(chalk.cyan("Muito abaixo do peso."))
    console.log("O que pode acontecer: Queda de cabelo, infertilidade, ausência menstrual")

} else if (resultado >= 17 && resultado < 18.5){
    console.log(chalk.blue("Abaixo do peso."))
    console.log("O que pode acontecer: Fadiga, stress, ansiedade")

} else if (resultado >= 18.5 && resultado < 25){
    console.log(chalk.green("Peso Normal."))
    console.log("O que pode acontecer: Menor risco de doenças cardíacas e vasculares")

} else if(resultado >= 25 && resultado < 30){
    console.log(chalk.yellow("Acima do peso."))
    console.log("O que pode acontecer: Fadiga, má circulação, varizes")

}else if(resultado >= 30 && resultado < 35){
    console.log(chalk.magenta("Obesidade Grau I."))
    console.log("O que pode acontecer: Diabetes, angina, infarto, aterosclerose")

} else if(resultado >=redBright("Obesidade Grau II.")){
    console.log("O que pode acontecer: Apneia do sono, falta de ar")

} else {
    console.log(chalk.red("Obesidade Grau III."))
    console.log("O que pode acontecer: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC")
}
 