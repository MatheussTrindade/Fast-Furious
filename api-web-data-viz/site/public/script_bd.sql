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

UPDATE usuario
SET nome = 'Ricardo Silva'
WHERE idUsuario = 13;


drop table usuario;

truncate table usuario;

create table minegame (
idMinegame int primary key auto_increment,
fkUsuario int,
tempo time,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario)
);

insert into minegame values
(null, 1, '00:00:05'),
(null, 2, '00:00:08'),
(null, 3, '00:00:03'),
(null, 5, '00:00:04'),
(null, 4, '00:00:04'),
(null, 6, '00:00:06'),
(null, 7, '00:00:07'),
(null, 10, '00:00:07'),
(null, 12, '00:00:10'),
(null, 13, '00:00:13');

select * from minegame;
drop table minegame;
truncate minegame;

create table quiz (
idQuiz int primary key auto_increment,
fkUsu int,
resultado varchar(7),
constraint fkUsu foreign key (fkUsu) references usuario (idUsuario)
);

insert into quiz values
(null, 1, 5),
(null, 2, 7),
(null, 3, 7),
(null, 4, 7),
(null, 5, 4),
(null, 6, 6),
(null, 7, 5),
(null, 8, 5);

select * from quiz;
drop table quiz;
truncate quiz;

select ROUND(tempo,0) as 'tempo', u.nome
from minegame m 
join usuario u on m.fkUsuario = u.idUsuario
order by m.tempo 
asc limit 5;

select (P_escolha) from usuario group by P_escolha;

select ROUND(tempo,0) as 'tempo', u.nome
from minegame m 
join usuario u on m.fkUsuario = u.idUsuario
order by m.tempo 
asc limit 1;
