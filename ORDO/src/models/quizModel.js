var database = require("../database/config");

function mostrar() {

  var instrucaoSql = `SELECT * FROM Quiz;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function gabarito(acertos, erros) {
  
  var instrucaoSql = `INSERT INTO (acertos, erros) Quiz VALUES (${acertos}, ${erros})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  mostrar,
  gabarito
}
