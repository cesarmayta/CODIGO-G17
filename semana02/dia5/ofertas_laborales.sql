-- Active: 1667004175402@@127.0.0.1@3306@ofertas_laborales
CREATE TABLE postulante(
    id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(200) NOT NULL,
    fecha_nacimiento DATE
);
