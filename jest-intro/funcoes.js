function dois(a, b, c) {
    var adicao = (a + b + c);
    return adicao;
};

function tres(a, b) {
    var multiplica = a * b;
    return multiplica;
};

function quatro(a, b, c) {
    var soma = a + b;
    var multiplica = soma * c;
    return multiplica;
};

function cinco(a, b) {
    var resultado = a ** b;
    return resultado;
};

function seis(a, b, c, d, e) {
    var menor = Math.min(a, b, c, d, e);
    return menor;
};

function sete(a) {
    var arredonda = Math.round(a);
    return arredonda;
}


module.exports = { dois, tres, quatro, cinco, seis, sete };