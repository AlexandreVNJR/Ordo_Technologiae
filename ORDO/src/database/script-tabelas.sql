-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE Ordo;

USE Ordo;




CREATE TABLE Agente (
	idAgente int primary key auto_increment,
    codinome varchar(45) unique,
    email varchar(300) unique,
    tempPref varchar(20),
    arquetipo varchar(15),
    senha varchar(40),
    fkChat int,
    foreign key fkAgenteChat(fkChat) references ChatGlobal(idChat)
    );
    
    create table Quiz(
	idQuiz int auto_increment primary key,
	acertos int,
    erros int,
    fkAgente int,
    foreign key fkAgenteQuiz(fkAgente) references Agente(idAgente)
    );
    
   





-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);