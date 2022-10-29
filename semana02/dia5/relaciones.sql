-- Active: 1667004175402@@127.0.0.1@3306@ofertas_laborales
CREATE TABLE postulante_experiencia(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    postulante_id BIGINT NOT NULL,
    empresa VARCHAR(255) NOT NULL,
    cargo VARCHAR(255),
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    FOREIGN KEY(postulante_id) REFERENCES postulante(id)
) ;

insert into postulante_experiencia(postulante_id,empresa,cargo) values (1100,'CONSORCIO 1','frontend');