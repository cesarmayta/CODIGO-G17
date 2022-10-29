-- Active: 1667004175402@@127.0.0.1@3306@ofertas_laborales
select * from postulante;
select nombre,email from postulante;
select nombre,email,pais,fecha_nacimiento,
(YEAR(CURRENT_DATE()) - YEAR(fecha_nacimiento)) as edad
from postulante;

--FILTROS
select * from postulante where pais = 'peru' or pais = 'colombia';

select * from postulante where pais in ('peru','chile','colombia');

select  nombre,email,fecha_nacimiento from postulante 
where pais = 'peru' 
and (YEAR(CURRENT_DATE()) - YEAR(fecha_nacimiento)) >= 30;

select pais,count(*) as cantidad,
max((YEAR(CURRENT_DATE()) - YEAR(fecha_nacimiento))) as edad_maxima
from postulante
GROUP BY pais
HAVING count(*) >= 100