var assistirModel = require("../models/assistirModel");



function assistir(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  // var cpf = req.body.cpfServer;
  var email = req.body.emailServer;
  var tempPref = req.body.tempPrefServer;
  var arquetipo = req.body.arquetipoServer;
  var senha = req.body.senhaServer;
  // var empresaId = req.body.empresaServer;

  // Faça as validações dos valores
  if (nome == undefined) {
      res.status(400).send("Seu nome está undefined!");}
  // }else  if (cpf == undefined) {
  //     res.status(400).send("Seu cpf está undefined!");
  // }  
  else if(tempPref == undefined){
      res.status(400).send("Seu tempPref está undefíned!")
  }
  else if(arquetipo == undefined){
      res.status(400).send("Seu arquetipo está undefíned!")
  }
  else if (email == undefined) {
      res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
      res.status(400).send("Sua senha está undefined!");}
  // } else if (empresaId == undefined) {
  //     res.status(400).send("Sua empresa está undefined!");
  // } else {

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
    var acertos = req.body.acertos;
    var erros = req.body.erros;

    //continuae aqui
    if (acertos == undefined) {
      res.status(400).send("acerto está undefined!");
    } else if (erros == undefined) {
      res.status(400).send("erro está undefined!");
    }

    assistirModel
      .continuar(acertos, erros)
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
    listar,
    continuar,
  };
}
