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
fkUsuario int,
tempo time,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario)
);

