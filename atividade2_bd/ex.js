const sqlite = require('sqlite3')
var rs = require('readline-sync')
const tabela = require('console.table')

const trataErroNaQuery = (erro) => {
    if (erro) {
        console.log('Aconteceu algo de errado: ' + erro.message);
        return;
    }
    console.log('Dado inserido com sucesso!')
}

const db = new sqlite.Database('ex1.db') // inicializa o banco de dados 

function cadastraCarro(nome, cor, ano, valor) {
    var nome = rs.question("\nModelo: ")
    var cor = rs.question("Cor: ")
    var ano = rs.questionInt("Ano: ")
    var valor = rs.questionFloat("Valor: ")
    var insere = `INSERT INTO Carro (nome, cor, ano, valor) VALUES (?, ?, ?, ?)`
    db.run(insere, [nome, cor, ano, valor], function (erro) {
        if (erro) {
            console.log("Mensagem de erro: " + erro.mensagem)

        } else {
            console.log("VEÍCULO INSERIDO COM SUCESSO!")
        }
        pergunta()
    })
}

function removeCarro(nome) {
    var nome = rs.question("Qual carro deseja excluir? ")
    db.run(`DELETE FROM Carro WHERE nome = ?`, nome, function (erro) {
        if (erro) {
            return console.log("Mensagem de erro: " + erro.mensagem)

        } else {
            console.log("VEÍCULO REMOVIDO COM SUCESSO!")
        }
        pergunta()
    })
}

function verTabela(nome, cor, ano, valor) {
    var sql = 'SELECT * FROM Carro'
    db.all(sql, [], (erro, rows) => {
        if (erro) {
            throw (erro)
        }
        console.table(rows)
        pergunta()
    })
}

function pergunta() {
    console.log("\nO QUE DESEJA FAZER ?\n")
    var resp = rs.questionInt("1 - Cadastrar Veículo\n2 - Remover Veículo\n3 - Ver Veículos cadastrados\n4 - Sair\n")


    if (resp == 1) {
        cadastraCarro()


    } else if (resp == 2) {
        removeCarro()

    } else if (resp == 3) {
        verTabela()

    } else {
        console.log("FIM DO PROGRAMA!")
    }
}
pergunta()