var assistirModel = require("../models/assistirModel");



function assistir(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var tempoUsuario = req.body.tempoUsuarioServer;
  var tempoCorrespondente = req.body.tempoCorrespondenteServer;
  var episodio = req.body.episodioServer;
  var temp = req.body.tempServer;
 

      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      usuarioModel.assistir(nome, email,tempPref, arquetipo, senha)
          .then(
              // resultado é o que a gente inseriu
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


  


function listar(req, res) {
  var idUsuario = req.params.idUsuario;

  function listar(req, res) {
    assistirModel
      .listar()
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }

  function continuar(req, res) {
    var tempoUsuario = req.body.tempoUsuario;
    var tempoCorrespondente = req.body.tempoCorrespondente;
    var episodio = req.body.episodio;
    var temp = req.body.temp;
    

    assistirModel
      .continuar(tempoUsuario, tempoCorrespondente,episodio,temp)
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
    assistir,
    continuar,
  };
}
