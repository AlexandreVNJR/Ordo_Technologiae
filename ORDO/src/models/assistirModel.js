var database = require("../database/config");

function listar() {

  var instrucaoSql = `SELECT * FROM Quiz;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(acertos, erros) {
  
  var instrucaoSql = `INSERT INTO (acertos, erros) Quiz VALUES (${acertos}, ${erros})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  listar,
  cadastrar
}
