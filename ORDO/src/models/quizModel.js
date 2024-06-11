var database = require("../database/config");

function mostrar(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrar():", acertos, erros, idUsuario);
  var instrucaoSql = `select acertos, erros from Quiz
                      where fkAgente = ${idUsuario} order by idQuiz desc limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function gabarito(acertos, erros, idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function gabarito():", acertos, erros, idUsuario);
  
  var instrucaoSql = `INSERT INTO Quiz (acertos, erros, fkAgente)  VALUES (${acertos}, ${erros}, ${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  mostrar,
  gabarito
}
