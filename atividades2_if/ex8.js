// Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é maiúscula ou não

var rs = require('readline-sync')

var texto = rs.question("Digite seu texto para o teste: ", { defaultInput: 'Gabriela' }) // {defaultInput} caso não digite nada e de enter, sera colocado Gabriela como valor padrao.
console.log(texto[0])

if ( texto[0] == texto[0].toUpperCase()){
    console.log("\nA primeira letra é maiúscula!")
    
} else {
    console.log("\nA primeira letra é minuscula")
}
// {defaultInput é uma option que altera o comportamento do question}