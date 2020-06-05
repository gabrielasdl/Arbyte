const sqlite = require('sqlite3')
var rs = require('readline-sync')

/*   //CRIA UM BANCO DE DADOS
const db = new sqlite.Database('aula.db', erro => {
    if (erro) {
        console.log(erro.menssagem)

    } else {
        console.log("Conectado ao banco de dados")
        db.run('CREATE TABLE Carro (marca text, modelo text, cor text, ano interger)') // CRIA UMA TABELA DENTRO DO BANCO
    }
})
*/

/*  PARA INSERIR DADOS NO BANCO
var query = "INSERT INTO Carro (marca, modelo, cor, ano) VALUES ('volkswagen', 'fusca', 'azul', '1965')"
db.run(query, function (erro) {
    if (erro) {
        console.log("Aconteceu algo errado" + erro.mensagem)
        return
    } else {
        console.log("Dado inserido com sucesso!")
    }
})    PARA INSERIR DADOS NO BANCO 
*/


/*  INSERE DADOS NO BANCO E MOSTRA O NUMERO DA ULTIMA LINHA INSERIDA
var sql = `INSERT INTO Carro (marca, modelo, cor, ano) VALUES (?, ?, ?, ?)`
function leCarro() {
    marca = rs.question("marca: ")
    modelo = rs.question("modelo: ")
    cor = rs.question("cor: ")
    ano = rs.questionInt("ano: ")
    db.run(sql, [marca, modelo, cor, ano], function (erro) {
        if (erro) {
            console.log("Mensagem de erro: " + erro.mensagem)

        } else {
            console.log("Foi inserida a linha" + this.lastID)
        }
    })
}
leCarro()
*/