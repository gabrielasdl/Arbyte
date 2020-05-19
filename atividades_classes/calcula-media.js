module.exports = function calculaMedia(arr) {   // module.exports serve para importar a funcao calculaMedia como modulo para o ex3
    var soma = 0;
    for (var i = 0; i < arr.length; i++) {
        soma = arr[i] + soma;
    }
    var div = soma / arr.length;
    return div;
}