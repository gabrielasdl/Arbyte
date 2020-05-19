// Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3). >> o 3 é potencia
// Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.

function volume(raio) {
    var valor = (4/3)  * Math.PI * (raio ** 3)
    return valor
}

var rs = require('readline-sync')

var esfera = rs.question("Digite a esfera: ")
var r = rs.questionFloat("Insira o raio: ")

console.log("A esfera é uma ",esfera,"e seu raio é",volume(r).toFixed(2))