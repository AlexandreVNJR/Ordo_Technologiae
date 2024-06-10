var database = require("../database/config");

function mostrar() {

  var instrucaoSql = `SELECT * FROM Quiz;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function gabarito(acertosLista, errosLista) {
  
  var instrucaoSql = `INSERT INTO Quiz (acertos, erros) Quiz VALUES (${acertoslista}, ${errosLista})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  mostrar,
  gabarito
}
