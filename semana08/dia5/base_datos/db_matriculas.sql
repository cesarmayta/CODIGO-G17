
CREATE TABLE tbl_alumno(  
    alumno_id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    alumno_nombre VARCHAR(255) NOT NULL,
    alumno_email VARCHAR(100) NOT NULL
);
CREATE TABLE tbl_curso(  
    curso_id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    curso_nombre VARCHAR(255) NOT NULL
);