var quizModel = require("../models/quizModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA quizController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    quizModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function finish(req, res) {
    
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var corretas = req.body.questionsCorrectServer;
    var usu = req.body.usuarioServer;

    console.log(corretas)

    // Faça as validações dos valores
    if (corretas == undefined) {
        res.status(400).send("Seu resultado está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.finish(usu, corretas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    finish,
    listar,
    testar
}