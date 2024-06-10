var express = require("express");
var router = express.Router();

var assitirController = require("../controllers/assitirController");

// router.get("/:empresaId", function (req, res) {
//   quizController.buscarquizsPorEmpresa(req, res);
// });

router.post("/assistir", function (req, res) {
  quizController.assistir(req, res);
})
router.post("/continuar", function (req, res) {
  quizController.continuar(req, res);
})

module.exports = router;