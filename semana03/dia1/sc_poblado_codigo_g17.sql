-- Active: 1667269624751@@127.0.0.1@3306@db_codigo_g17
--poblado de datos db_codigo_g17
--alumno
insert into tbl_alumno(alumno_nombre,alumno_email)
VALUES
('César Mayta','cesarmayta@gmail.com'),
('Jorge Loza','jorgeloza@gmail.com');

--nivel
insert into tbl_nivel(nivel_nombre)
values ('BASICO'),('AVANZADO');
--modulo
insert into tbl_modulo(modulo_nombre)
values ('FRONTEND'),('BACKEND');
--cursos
insert into tbl_curso(curso_nombre)
values ('HTML Y CSS'),('JAVASCRIPT'),('REACT.JS'),('PYTHON'),('MYSQL'),('FLASK');

insert into tbl_matricula(alumno_id,nivel_id,modulo_id)
values (1,1,1),(2,1,1);

insert into tbl_matricula_curso(matricula_id,curso_id)
values (1,1),(1,2),(1,3),(2,1),(2,2),(2,3);