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

-- Volcando datos para la tabla db_ecommerce.auth_group: ~0 rows (aproximadamente)

-- Volcando datos para la tabla db_ecommerce.auth_group_permissions: ~0 rows (aproximadamente)

-- Volcando datos para la tabla db_ecommerce.auth_permission: ~36 rows (aproximadamente)
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
	(1, 'Can add log entry', 1, 'add_logentry'),
	(2, 'Can change log entry', 1, 'change_logentry'),
	(3, 'Can delete log entry', 1, 'delete_logentry'),
	(4, 'Can view log entry', 1, 'view_logentry'),
	(5, 'Can add permission', 2, 'add_permission'),
	(6, 'Can change permission', 2, 'change_permission'),
	(7, 'Can delete permission', 2, 'delete_permission'),
	(8, 'Can view permission', 2, 'view_permission'),
	(9, 'Can add group', 3, 'add_group'),
	(10, 'Can change group', 3, 'change_group'),
	(11, 'Can delete group', 3, 'delete_group'),
	(12, 'Can view group', 3, 'view_group'),
	(13, 'Can add user', 4, 'add_user'),
	(14, 'Can change user', 4, 'change_user'),
	(15, 'Can delete user', 4, 'delete_user'),
	(16, 'Can view user', 4, 'view_user'),
	(17, 'Can add content type', 5, 'add_contenttype'),
	(18, 'Can change content type', 5, 'change_contenttype'),
	(19, 'Can delete content type', 5, 'delete_contenttype'),
	(20, 'Can view content type', 5, 'view_contenttype'),
	(21, 'Can add session', 6, 'add_session'),
	(22, 'Can change session', 6, 'change_session'),
	(23, 'Can delete session', 6, 'delete_session'),
	(24, 'Can view session', 6, 'view_session'),
	(25, 'Can add marca', 7, 'add_marca'),
	(26, 'Can change marca', 7, 'change_marca'),
	(27, 'Can delete marca', 7, 'delete_marca'),
	(28, 'Can view marca', 7, 'view_marca'),
	(29, 'Can add producto', 8, 'add_producto'),
	(30, 'Can change producto', 8, 'change_producto'),
	(31, 'Can delete producto', 8, 'delete_producto'),
	(32, 'Can view producto', 8, 'view_producto'),
	(33, 'Can add categoria', 9, 'add_categoria'),
	(34, 'Can change categoria', 9, 'change_categoria'),
	(35, 'Can delete categoria', 9, 'delete_categoria'),
	(36, 'Can view categoria', 9, 'view_categoria');

-- Volcando datos para la tabla db_ecommerce.auth_user: ~1 rows (aproximadamente)
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
	(1, 'pbkdf2_sha256$260000$tXfaBTrbw8I6xiPoClnmUu$v83YG96FXwKdGtxeWE+VLYKcymBOz/BjZNTmy3dZLsg=', '2022-12-10 03:43:59.760961', 1, 'admin', '', '', '', 1, 1, '2022-12-10 03:42:21.959304');

-- Volcando datos para la tabla db_ecommerce.auth_user_groups: ~0 rows (aproximadamente)

-- Volcando datos para la tabla db_ecommerce.auth_user_user_permissions: ~0 rows (aproximadamente)

-- Volcando datos para la tabla db_ecommerce.django_admin_log: ~8 rows (aproximadamente)
INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
	(1, '2022-12-10 03:44:19.934018', '1', 'CELULARES', 1, '[{"added": {}}]', 9, 1),
	(2, '2022-12-10 03:44:40.257265', '2', 'VIDEOJUEGOS', 1, '[{"added": {}}]', 9, 1),
	(3, '2022-12-10 03:45:07.669419', '1', 'Xiaomi', 1, '[{"added": {}}]', 7, 1),
	(4, '2022-12-10 03:45:28.399940', '2', 'Samsung', 1, '[{"added": {}}]', 7, 1),
	(5, '2022-12-10 03:46:23.558481', '3', 'Nintendo', 1, '[{"added": {}}]', 7, 1),
	(6, '2022-12-10 03:46:27.508437', '4', 'Sony', 1, '[{"added": {}}]', 7, 1),
	(7, '2022-12-10 03:48:29.006228', '1', 'Celular Samsung Galaxy-A13 Negro', 1, '[{"added": {}}]', 8, 1),
	(8, '2022-12-10 03:49:39.587260', '2', 'Xiaomi Redmi Note 11 Dual Sim 128 Gb 6', 1, '[{"added": {}}]', 8, 1);

-- Volcando datos para la tabla db_ecommerce.django_content_type: ~9 rows (aproximadamente)
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
	(1, 'admin', 'logentry'),
	(3, 'auth', 'group'),
	(2, 'auth', 'permission'),
	(4, 'auth', 'user'),
	(5, 'contenttypes', 'contenttype'),
	(9, 'panel', 'categoria'),
	(7, 'panel', 'marca'),
	(8, 'panel', 'producto'),
	(6, 'sessions', 'session');

-- Volcando datos para la tabla db_ecommerce.django_migrations: ~19 rows (aproximadamente)
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
	(1, 'contenttypes', '0001_initial', '2022-12-10 03:07:25.758567'),
	(2, 'auth', '0001_initial', '2022-12-10 03:07:26.171653'),
	(3, 'admin', '0001_initial', '2022-12-10 03:07:26.272570'),
	(4, 'admin', '0002_logentry_remove_auto_add', '2022-12-10 03:07:26.279550'),
	(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-12-10 03:07:26.287528'),
	(6, 'contenttypes', '0002_remove_content_type_name', '2022-12-10 03:07:26.363326'),
	(7, 'auth', '0002_alter_permission_name_max_length', '2022-12-10 03:07:26.417246'),
	(8, 'auth', '0003_alter_user_email_max_length', '2022-12-10 03:07:26.473096'),
	(9, 'auth', '0004_alter_user_username_opts', '2022-12-10 03:07:26.481076'),
	(10, 'auth', '0005_alter_user_last_login_null', '2022-12-10 03:07:26.545347'),
	(11, 'auth', '0006_require_contenttypes_0002', '2022-12-10 03:07:26.547343'),
	(12, 'auth', '0007_alter_validators_add_error_messages', '2022-12-10 03:07:26.557316'),
	(13, 'auth', '0008_alter_user_username_max_length', '2022-12-10 03:07:26.611199'),
	(14, 'auth', '0009_alter_user_last_name_max_length', '2022-12-10 03:07:26.688975'),
	(15, 'auth', '0010_alter_group_name_max_length', '2022-12-10 03:07:26.712912'),
	(16, 'auth', '0011_update_proxy_permissions', '2022-12-10 03:07:26.721888'),
	(17, 'auth', '0012_alter_user_first_name_max_length', '2022-12-10 03:07:26.788710'),
	(18, 'sessions', '0001_initial', '2022-12-10 03:07:26.843267'),
	(19, 'panel', '0001_initial', '2022-12-10 03:27:39.016083');

-- Volcando datos para la tabla db_ecommerce.django_session: ~1 rows (aproximadamente)
INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
	('nxh7kdjakesukcgoara9y4k97419n1rd', '.eJxVjEEOwiAQRe_C2hCGFMa6dO8ZCDAzUjWQlHZlvLtt0oVu_3vvv1WI61LC2nkOE6mLAnX63VLMT647oEes96Zzq8s8Jb0r-qBd3xrx63q4fwcl9rLV0Ts0AyAJgIgh64R8jgnRjGwHyV4cMPuMLAh2tMhA5M8pOWM2R32-7oY4CA:1p3qmN:uHi5TK60IWtLsbSu9XOIoc3CxgRkJ0PQI4PyF1D7Te8', '2022-12-24 03:43:59.762887');

-- Volcando datos para la tabla db_ecommerce.panel_categoria: ~2 rows (aproximadamente)
INSERT INTO `panel_categoria` (`id`, `nombre`) VALUES
	(1, 'CELULARES'),
	(2, 'VIDEOJUEGOS');

-- Volcando datos para la tabla db_ecommerce.panel_marca: ~4 rows (aproximadamente)
INSERT INTO `panel_marca` (`id`, `nombre`) VALUES
	(1, 'Xiaomi'),
	(2, 'Samsung'),
	(3, 'Nintendo'),
	(4, 'Sony');

-- Volcando datos para la tabla db_ecommerce.panel_producto: ~2 rows (aproximadamente)
INSERT INTO `panel_producto` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `categoria_id`, `marca_id`) VALUES
	(1, 'Celular Samsung Galaxy-A13 Negro', 'Características destacadas\r\nCámara posterior            50MP + 5MP + 2MP + 2MP\r\nCámara frontal 8MP\r\nTamaño de la pantalla   6.6 pulgadas\r\nMemoria interna             64GB\r\nNúcleos del procesador Octa Core\r\nMemoria expandible     MicroSD (Hasta 1TB)\r\nCarga rápida      No', 599.00, 'productos/samsung1.webp', 1, 2),
	(2, 'Xiaomi Redmi Note 11 Dual Sim 128 Gb 6', 'Siguiendo con su abrumadora estrategia de presentar un sinfin de telefonos al mes, Xiaomi lanza apenas una semana despues de presentar los Redmi Note 11 5G un modelo 4G que cuenta con bastantes mas diferencias que las que encontramos a nivel de conectividad', 779.00, 'productos/xiaomi1.webp', 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
