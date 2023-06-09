var rankingModel = require("../models/rankingModel");


function buscarUltimasMedidas(req, res) {

    const limite_linhas = 5;

    // var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    rankingModel.buscarUltimasMedidas(req, res).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    // var idUsuario = req.params.idUsuario;

    console.log(`Recuperando medidas em tempo real`);

    rankingModel.buscarMedidasEmTempoReal(req, res).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ranking(req, res) {
    var Usuario = req.body.UsuarioServer
    console.log(`Plotando o campeão !`)
    rankingModel.ranking(Usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as estufas da empresa..", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas,
    ranking
}