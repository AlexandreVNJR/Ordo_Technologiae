var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// router.get("/:empresaId", function (req, res) {
//   quizController.buscarquizsPorEmpresa(req, res);
// });

router.post("/cadastrar", function (req, res) {
  quizController.cadastrar(req, res);
})
router.post("/listar", function (req, res) {
  quizController.listar(req, res);
})

module.exports = router;