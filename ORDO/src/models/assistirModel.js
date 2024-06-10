var database = require("../database/config");

function continuar() {

  var instrucaoSql = `select * from Assistir`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function assistir(tempoUsuario, tempoCorrespondente,episodio,temp) {
  
  var instrucaoSql = `INSERT INTO Assistir(tempoUsuario, tempoCorrespondente,episodio,temp) Quiz VALUES (${tempoUsuario}, ${tempoCorrespondente},${episodio},${temp})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  continuar,
  assistir
}
