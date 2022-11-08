-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla db_smartdevs.tbl_area
CREATE TABLE IF NOT EXISTS `tbl_area` (
  `area_id` int NOT NULL AUTO_INCREMENT,
  `area_descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_area: ~7 rows (aproximadamente)
INSERT INTO `tbl_area` (`area_id`, `area_descripcion`) VALUES
	(1, 'frontend'),
	(2, 'backend'),
	(3, 'fullstack'),
	(4, 'mobile'),
	(6, 'DevOps'),
	(7, 'IoT'),
	(10, 'UI/UX');

-- Volcando estructura para tabla db_smartdevs.tbl_modalidad
CREATE TABLE IF NOT EXISTS `tbl_modalidad` (
  `modalidad_id` int NOT NULL AUTO_INCREMENT,
  `modalidad_descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`modalidad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_modalidad: ~3 rows (aproximadamente)
INSERT INTO `tbl_modalidad` (`modalidad_id`, `modalidad_descripcion`) VALUES
	(1, 'remoto'),
	(2, 'presencial'),
	(3, 'semipresencial');

-- Volcando estructura para tabla db_smartdevs.tbl_nivel
CREATE TABLE IF NOT EXISTS `tbl_nivel` (
  `nivel_id` int NOT NULL AUTO_INCREMENT,
  `nivel_descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`nivel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_nivel: ~4 rows (aproximadamente)
INSERT INTO `tbl_nivel` (`nivel_id`, `nivel_descripcion`) VALUES
	(1, 'Trainee'),
	(2, 'Junio'),
	(3, 'Semisenior'),
	(4, 'Senior');

-- Volcando estructura para tabla db_smartdevs.tbl_oferta
CREATE TABLE IF NOT EXISTS `tbl_oferta` (
  `oferta_id` int NOT NULL AUTO_INCREMENT,
  `oferta_titulo` varchar(255) NOT NULL,
  `oferta_fec_pub` date NOT NULL COMMENT 'fecha publicacion',
  `oferta_fec_fin` date NOT NULL,
  `oferta_resumen` text,
  `oferta_detalle` text,
  `oferta_estado` int NOT NULL DEFAULT '1',
  `oferta_fecreg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ubicacion_id` int NOT NULL,
  `modalidad_id` int NOT NULL,
  `area_id` int NOT NULL,
  `periodo_id` int NOT NULL,
  `nivel_id` int NOT NULL,
  PRIMARY KEY (`oferta_id`),
  KEY `fk_tbl_oferta_tbl_ubicacion_idx` (`ubicacion_id`),
  KEY `fk_tbl_oferta_tbl_modalidad1_idx` (`modalidad_id`),
  KEY `fk_tbl_oferta_tbl_area1_idx` (`area_id`),
  KEY `fk_tbl_oferta_tbl_periodo1_idx` (`periodo_id`),
  KEY `fk_tbl_oferta_tbl_nivel1_idx` (`nivel_id`),
  CONSTRAINT `fk_tbl_oferta_tbl_area1` FOREIGN KEY (`area_id`) REFERENCES `tbl_area` (`area_id`),
  CONSTRAINT `fk_tbl_oferta_tbl_modalidad1` FOREIGN KEY (`modalidad_id`) REFERENCES `tbl_modalidad` (`modalidad_id`),
  CONSTRAINT `fk_tbl_oferta_tbl_nivel1` FOREIGN KEY (`nivel_id`) REFERENCES `tbl_nivel` (`nivel_id`),
  CONSTRAINT `fk_tbl_oferta_tbl_periodo1` FOREIGN KEY (`periodo_id`) REFERENCES `tbl_periodo` (`periodo_id`),
  CONSTRAINT `fk_tbl_oferta_tbl_ubicacion` FOREIGN KEY (`ubicacion_id`) REFERENCES `tbl_ubicacion` (`ubicacion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_oferta: ~0 rows (aproximadamente)

-- Volcando estructura para tabla db_smartdevs.tbl_oferta_postulante
CREATE TABLE IF NOT EXISTS `tbl_oferta_postulante` (
  `oferta_postulante_id` int NOT NULL AUTO_INCREMENT,
  `oferta_postulante_fecreg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `oferta_postulante_estado` char(1) NOT NULL DEFAULT '1',
  `oferta_id` int NOT NULL,
  `postulante_id` int NOT NULL,
  PRIMARY KEY (`oferta_postulante_id`),
  KEY `fk_tbl_oferta_postulante_tbl_oferta1_idx` (`oferta_id`),
  KEY `fk_tbl_oferta_postulante_tbl_postulante1_idx` (`postulante_id`),
  CONSTRAINT `fk_tbl_oferta_postulante_tbl_oferta1` FOREIGN KEY (`oferta_id`) REFERENCES `tbl_oferta` (`oferta_id`),
  CONSTRAINT `fk_tbl_oferta_postulante_tbl_postulante1` FOREIGN KEY (`postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_oferta_postulante: ~0 rows (aproximadamente)

-- Volcando estructura para tabla db_smartdevs.tbl_periodo
CREATE TABLE IF NOT EXISTS `tbl_periodo` (
  `periodo_id` int NOT NULL AUTO_INCREMENT,
  `periodo_descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`periodo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_periodo: ~3 rows (aproximadamente)
INSERT INTO `tbl_periodo` (`periodo_id`, `periodo_descripcion`) VALUES
	(1, 'FullTime'),
	(2, 'PartTime'),
	(3, 'FreeLance');

-- Volcando estructura para tabla db_smartdevs.tbl_postulante
CREATE TABLE IF NOT EXISTS `tbl_postulante` (
  `postulante_id` int NOT NULL AUTO_INCREMENT,
  `postulante_nombres` varchar(255) NOT NULL,
  `postulante_apellidos` varchar(255) NOT NULL,
  `postulante_nrodocide` varchar(100) NOT NULL,
  `postulante_fecnac` date NOT NULL,
  `postulante_genero` char(1) NOT NULL,
  `postulante_estado` char(1) NOT NULL DEFAULT '1',
  `postulante_fecreg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `postulante_perfil` text,
  PRIMARY KEY (`postulante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_postulante: ~0 rows (aproximadamente)

-- Volcando estructura para tabla db_smartdevs.tbl_postulante_contacto
CREATE TABLE IF NOT EXISTS `tbl_postulante_contacto` (
  `postulante_contacto_id` int NOT NULL AUTO_INCREMENT,
  `postulante_contacto_valor` varchar(255) NOT NULL,
  `postulante_contacto_estado` char(1) NOT NULL DEFAULT '1',
  `postulante_contacto_fecreg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipo_contacto_id` int NOT NULL,
  `postulante_id` int NOT NULL,
  PRIMARY KEY (`postulante_contacto_id`),
  KEY `fk_tbl_postulante_contacto_tbl_tipo_contacto1_idx` (`tipo_contacto_id`),
  KEY `fk_tbl_postulante_contacto_tbl_postulante1_idx` (`postulante_id`),
  CONSTRAINT `fk_tbl_postulante_contacto_tbl_postulante1` FOREIGN KEY (`postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`),
  CONSTRAINT `fk_tbl_postulante_contacto_tbl_tipo_contacto1` FOREIGN KEY (`tipo_contacto_id`) REFERENCES `tbl_tipo_contacto` (`tipo_contacto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_postulante_contacto: ~0 rows (aproximadamente)

-- Volcando estructura para tabla db_smartdevs.tbl_postulante_estudio
CREATE TABLE IF NOT EXISTS `tbl_postulante_estudio` (
  `postulante_estudio_id` int NOT NULL AUTO_INCREMENT,
  `postulante_estudio_titulo` varchar(255) NOT NULL,
  `postulante_estudio_institucion` varchar(255) NOT NULL,
  `postulante_estudio_fecini` date NOT NULL,
  `postulante_estudio_fecfin` date DEFAULT NULL,
  `postulante_estudio_estado` char(1) NOT NULL DEFAULT '1',
  `postulante_estudio_fecreg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipo_estudio_id` int NOT NULL,
  `postulante_id` int NOT NULL,
  PRIMARY KEY (`postulante_estudio_id`),
  KEY `fk_postulante_estudio_tipo_estudio1_idx` (`tipo_estudio_id`),
  KEY `fk_postulante_estudio_tbl_postulante1_idx` (`postulante_id`),
  CONSTRAINT `fk_postulante_estudio_tbl_postulante1` FOREIGN KEY (`postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`),
  CONSTRAINT `fk_postulante_estudio_tipo_estudio1` FOREIGN KEY (`tipo_estudio_id`) REFERENCES `tbl_tipo_estudio` (`tipo_estudio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_postulante_estudio: ~0 rows (aproximadamente)

-- Volcando estructura para tabla db_smartdevs.tbl_postulante_experiencia
CREATE TABLE IF NOT EXISTS `tbl_postulante_experiencia` (
  `postulante_experiencia_id` int NOT NULL AUTO_INCREMENT,
  `postulante_experiencia_puesto` varchar(255) NOT NULL,
  `postulante_experiencia_empresa` varchar(255) NOT NULL,
  `postulante_experiencia_detalle` text NOT NULL,
  `postulante_experiencia_fecini` date NOT NULL,
  `postulante_experiencia_fecfin` date DEFAULT NULL,
  `postulante_experiencia_estado` char(1) NOT NULL DEFAULT '1',
  `postulante_experiencia_fecreg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `postulante_id` int NOT NULL,
  PRIMARY KEY (`postulante_experiencia_id`),
  KEY `fk_tbl_postulante_experiencia_tbl_postulante1_idx` (`postulante_id`),
  CONSTRAINT `fk_tbl_postulante_experiencia_tbl_postulante1` FOREIGN KEY (`postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_postulante_experiencia: ~0 rows (aproximadamente)

-- Volcando estructura para tabla db_smartdevs.tbl_tipo_contacto
CREATE TABLE IF NOT EXISTS `tbl_tipo_contacto` (
  `tipo_contacto_id` int NOT NULL AUTO_INCREMENT,
  `tipo_contacto_descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`tipo_contacto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_tipo_contacto: ~3 rows (aproximadamente)
INSERT INTO `tbl_tipo_contacto` (`tipo_contacto_id`, `tipo_contacto_descripcion`) VALUES
	(1, 'Telefono'),
	(2, 'Direccion'),
	(3, 'Email');

-- Volcando estructura para tabla db_smartdevs.tbl_tipo_estudio
CREATE TABLE IF NOT EXISTS `tbl_tipo_estudio` (
  `tipo_estudio_id` int NOT NULL AUTO_INCREMENT,
  `tipo_estudio_descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`tipo_estudio_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_tipo_estudio: ~5 rows (aproximadamente)
INSERT INTO `tbl_tipo_estudio` (`tipo_estudio_id`, `tipo_estudio_descripcion`) VALUES
	(1, 'Tecnico'),
	(2, 'Universitario'),
	(3, 'Postgrado'),
	(4, 'Bootcamp'),
	(5, 'Otros');

-- Volcando estructura para tabla db_smartdevs.tbl_ubicacion
CREATE TABLE IF NOT EXISTS `tbl_ubicacion` (
  `ubicacion_id` int NOT NULL AUTO_INCREMENT,
  `ubicacion_pais` varchar(255) NOT NULL,
  `ubicacion_ciudad` varchar(255) NOT NULL,
  `ubicacion_codigo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ubicacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_ubicacion: ~25 rows (aproximadamente)
INSERT INTO `tbl_ubicacion` (`ubicacion_id`, `ubicacion_pais`, `ubicacion_ciudad`, `ubicacion_codigo`) VALUES
	(1, 'Perú', 'Amazonas', '01'),
	(2, 'Perú', 'Áncash', '02'),
	(3, 'Perú', 'Apurímac', '03'),
	(4, 'Perú', 'Arequipa', '04'),
	(5, 'Perú', 'Ayacucho', '05'),
	(6, 'Perú', 'Cajamarca', '06'),
	(7, 'Perú', 'Callao', '07'),
	(8, 'Perú', 'Cusco', '08'),
	(9, 'Perú', 'Huancavelica', '09'),
	(10, 'Perú', 'Huánuco', '10'),
	(11, 'Perú', 'Ica', '11'),
	(12, 'Perú', 'Junín', '12'),
	(13, 'Perú', 'La Libertad', '13'),
	(14, 'Perú', 'Lambayeque', '14'),
	(15, 'Perú', 'Lima', '15'),
	(16, 'Perú', 'Loreto', '16'),
	(17, 'Perú', 'Madre de Dios', '17'),
	(18, 'Perú', 'Moquegua', '18'),
	(19, 'Perú', 'Pasco', '19'),
	(20, 'Perú', 'Piura', '20'),
	(21, 'Perú', 'Puno', '21'),
	(22, 'Perú', 'San Martín', '22'),
	(23, 'Perú', 'Tacna', '23'),
	(24, 'Perú', 'Tumbes', '24'),
	(25, 'Perú', 'Ucayali', '25');

-- Volcando estructura para tabla db_smartdevs.tbl_usuario
CREATE TABLE IF NOT EXISTS `tbl_usuario` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `usuario_nombre` varchar(255) NOT NULL,
  `usuario_password` varchar(255) NOT NULL,
  `usuario_fecreg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_estado` char(1) NOT NULL DEFAULT '1',
  `postulante_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`),
  KEY `fk_tbl_usuario_tbl_postulante1_idx` (`postulante_id`),
  CONSTRAINT `fk_tbl_usuario_tbl_postulante1` FOREIGN KEY (`postulante_id`) REFERENCES `tbl_postulante` (`postulante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla db_smartdevs.tbl_usuario: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
