/*Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade. 
Utilize o pacote : https://www.npmjs.com/package/age-calculator */

let {AgeFromDate} = require('age-calculator');
var rs = require('readline-sync')

var data = rs.question("Informe sua data de nascimento: ")

let ageFromDate = new AgeFromDatenew(data).age;
  console.log("value from AgeFromDate", ageFromDate);


  /////////////TERMINAR//////////////