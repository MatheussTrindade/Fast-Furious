var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select m.tempo, u.idUsuario
        from minegame m 
        join usuario u on m.fkUsuario = u.idUsuario
        order by m.tempo asc limit 5;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select m.tempo, u.idUsuario
        from minegame m 
        join usuario u on m.fkUsuario = u.idUsuario
        order by m.tempo asc limit 5;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select m.tempo, u.idUsuario
        from minegame m 
        join usuario u on m.fkUsuario = u.idUsuario
        order by m.tempo asc limit 5;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select m.tempo, u.idUsuario
        from minegame m 
        join usuario u on m.fkUsuario = u.idUsuario
        order by m.tempo asc limit 5;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÂO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Execuntando a intrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}