-- poblado de datos para ofertas laborales
--area
insert into tbl_area(area_descripcion)
values ('frontend'),('backend'),('fullstack'),('mobile');
--modalidad
insert into tbl_modalidad(modalidad_descripcion)
values ('remoto'),('presencial'),('semipresencial');
--nivel
insert into tbl_nivel(nivel_descripcion)
values ('Trainee'),('Junio'),('Semisenior'),('Senior');
--periodo
insert into tbl_periodo(periodo_descripcion)
values('FullTime'),('PartTime'),('FreeLance');

--poblado de datos para postulantes
--periodo
insert into tbl_tipo_contacto(tipo_contacto_descripcion)
values('Telefono'),('Direccion'),('Email');
--tipo de estudio
insert into tbl_tipo_estudio(tipo_estudio_descripcion)
values ('Tecnico'),('Universitario'),('Postgrado'),('Bootcamp'),('Otros');


insert into tbl_ubicacion(ubicacion_pais,ubicacion_codigo,ubicacion_ciudad)
values
('Perú','01', 'Amazonas'),
('Perú','02', 'Áncash'),
('Perú','03', 'Apurímac'),
('Perú','04', 'Arequipa'),
('Perú','05', 'Ayacucho'),
('Perú','06', 'Cajamarca'),
('Perú','07', 'Callao'),
('Perú','08', 'Cusco'),
('Perú','09', 'Huancavelica'),
('Perú','10', 'Huánuco'),
('Perú','11', 'Ica'),
('Perú','12', 'Junín'),
('Perú','13', 'La Libertad'),
('Perú','14', 'Lambayeque'),
('Perú','15', 'Lima'),
('Perú','16', 'Loreto'),
('Perú','17', 'Madre de Dios'),
('Perú','18', 'Moquegua'),
('Perú','19', 'Pasco'),
('Perú','20', 'Piura'),
('Perú','21', 'Puno'),
('Perú','22', 'San Martín'),
('Perú','23', 'Tacna'),
('Perú','24', 'Tumbes'),
('Perú','25', 'Ucayali');
