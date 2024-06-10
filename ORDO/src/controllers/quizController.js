var quizModel = require("../models/quizModel");

function mostrar(req, res) {
  var idUsuario = req.params.idUsuario;

  function mostrar(req, res) {
    quizModel
      .mostrar()
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }

  function gabarito(req, res) {
    var acertos = req.body.acertos;
    var erros = req.body.erros;

    //continuae aqui
    if (acertos == undefined) {
      res.status(400).send("acerto está undefined!");
    } else if (erros == undefined) {
      res.status(400).send("erro está undefined!");
    }

    quizModel
      .gabarito(acertos, erros)
      .then(
        // resultado é o que a gente inseriu
        function (resultado) {
          res.json(resultado);
        }
      )
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

  module.exports = {
    mostrar,
    gabarito,
  };
}
