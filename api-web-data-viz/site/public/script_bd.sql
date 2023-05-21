create database projetoindividual;

use projetoindividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha int,
P_escolha varchar(50)
);

select * from usuario;

drop table usuario;

truncate table usuario;

create table minegame (
idMinegame int primary key auto_increment,
fkUsuario int,
tempo time,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario)
);

select * from minegame;
drop table minegame;

create table quiz (
idQuiz int primary key auto_increment,
fkUsu int,
resultado varchar(7),
constraint fkUsu foreign key (fkUsu) references usuario (idUsuario)
);

select * from quiz;
drop table quiz;

