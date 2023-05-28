var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/ultimos", function (req, res) {
    rankingController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real", function (req, res) {
    rankingController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;