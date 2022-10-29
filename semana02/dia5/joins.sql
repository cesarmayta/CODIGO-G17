
select empresa from postulante_experiencia;
select nombre from postulante;

select 
p.nombre,e.empresa,e.cargo
from postulante p
INNER JOIN postulante_experiencia e ON p.id = e.postulante_id;