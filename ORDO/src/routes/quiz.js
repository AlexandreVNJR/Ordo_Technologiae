var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// router.get("/:empresaId", function (req, res) {
//   quizController.buscarquizsPorEmpresa(req, res);
// });

router.post("/gabarito", function (req, res) {
  quizController.gabarito(req, res);
})
router.post("/mostrar", function (req, res) {
  quizController.listar(req, res);
})

module.exports = router;