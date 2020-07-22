const { dois, tres, quatro, cinco, seis, sete } = require('./funcoes');


describe("a função dois que representa o exercicio 2", () => {
    it(" retorna 6 quando somamos 1 + 2 + 3 ", () => {
        expect(dois(1, 2, 3)).toBe(6);
    });
});

describe("a função tres que representa o exercicio 3", () => {
    it("retorna 8 quando multiplicamos 4 e 2 ", () => {
        expect(tres(4, 2)).toBe(8);
    });
});

describe("a função quatro que representa o exercicio 4", () => {
    it("retorna 49 quando somamos 2 + 5 e multiplicamos seu resultado por 7", () => {
        expect(quatro(2, 5, 7)).toBe(49);
    });
});

describe("a função cinco que representa o exercicio 5", () => {
    it("retorna 64 quando 2 elevado a 6", () => {
        expect(cinco(2, 6)).toBe(64);
    });
});

describe("a função seis que representa o exercicio 6", () => {
    it("retorna 1 pedimos o retorno do menos numero entre 3,6,1,5,7", () => {
        expect(seis(3, 6, 1, 5, 7)).toBe(1);
    });
});

describe("a função sete que representa o exercicio 7", () => {
    it("retorna 4 arredondando o numero 3.56 que foi inserido", () => {
        expect(sete(3.56)).toBe(4);
    });
});