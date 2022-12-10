-- Volcando datos para la tabla db_ecommerce.panel_categoria: ~0 rows (aproximadamente)
INSERT INTO `panel_categoria` (`id`, `nombre`) VALUES
	(1, 'CELULARES'),
	(2, 'VIDEOJUEGOS');

-- Volcando datos para la tabla db_ecommerce.panel_marca: ~0 rows (aproximadamente)
INSERT INTO `panel_marca` (`id`, `nombre`) VALUES
	(1, 'Xiaomi'),
	(2, 'Samsung'),
	(3, 'Nintendo'),
	(4, 'Sony');

-- Volcando datos para la tabla db_ecommerce.panel_producto: ~0 rows (aproximadamente)
INSERT INTO `panel_producto` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `categoria_id`, `marca_id`) VALUES
	(1, 'Celular Samsung Galaxy-A13 Negro', 'Características destacadas\r\nCámara posterior            50MP + 5MP + 2MP + 2MP\r\nCámara frontal 8MP\r\nTamaño de la pantalla   6.6 pulgadas\r\nMemoria interna             64GB\r\nNúcleos del procesador Octa Core\r\nMemoria expandible     MicroSD (Hasta 1TB)\r\nCarga rápida      No', 599.00, 'productos/samsung1.webp', 1, 2),
	(2, 'Xiaomi Redmi Note 11 Dual Sim 128 Gb 6', 'Siguiendo con su abrumadora estrategia de presentar un sinfin de telefonos al mes, Xiaomi lanza apenas una semana despues de presentar los Redmi Note 11 5G un modelo 4G que cuenta con bastantes mas diferencias que las que encontramos a nivel de conectividad', 779.00, 'productos/xiaomi1.webp', 1, 1);
