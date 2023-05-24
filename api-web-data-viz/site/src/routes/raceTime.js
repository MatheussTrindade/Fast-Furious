var express = require("express");
var router = express.Router();

var timerController = require("../controllers/timerController");

router.get("/", function (req, res) {
    timerController.testar(req, res);
});

router.get("/listar", function (req, res) {
    timerController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/stopTime", function (req, res) {
    timerController.stopTime(req, res);
})


module.exports = router;