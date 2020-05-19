// Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte: 
// − Se o número de lados for igual a 3 escrever TRI NGULO e o valor da área 
// − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. 
// − Se o número de lados for igual a 5 escrever PENTÁGONO.

var rs = require('readline-sync')

var poligonoQuant = rs.questionInt("Digite a quantidade de lados do seu polígono: ")

if (poligonoQuant == 3 || poligonoQuant == 4 || poligonoQuant == 5) {


    if (poligonoQuant == 3) {
        var poligonoBase = rs.questionFloat("Digite a medida (em cm) da base do seu polígono: ")
        var poligonoAlt = rs.questionFloat("Digite a medida (em cm) da altura do seu polígono: ")
        console.log("\nO seu polígono é um TRIANGULO! ")
        var area = ((poligonoBase * poligonoAlt) / 2)
        console.log("E a área do seu triangulo é de: " + area + " centimetros")

    } else if (poligonoQuant == 4) {
        var poligonoBase = rs.questionFloat("Digite a medida (em cm) da base do seu polígono: ")
        var poligonoAlt = rs.questionFloat("Digite a medida (em cm) da altura do seu polígono: ")
        console.log("\nO seu polígono é um QUADRADO! ")
        var area = (poligonoBase * poligonoAlt)
        console.log("E a área do seu quadrado é de: " + area + " centimetros")

    } else if (poligonoQuant == 5) {
        console.log("\nO seu polígono é um PENTAGONO! ")

    }
}

else {
    console.log("Numero incorreto")
}