-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-05-2021 a las 02:25:41
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbtiendavirtual`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atencion1`
--

CREATE TABLE `atencion1` (
  `idAtencion` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `idCliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `atencion1`
--

INSERT INTO `atencion1` (`idAtencion`, `idEmpleado`, `fecha`, `idCliente`) VALUES
(1, 1, '2021-03-03', 2),
(2, 2, '2021-01-01', 1),
(3, 2, '2021-01-01', 1),
(4, 2, '2020-03-02', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `descripcion`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(1, 'Rostro', 'Productos de belleza para el rostro, como bases, polvos, rubor etc.', NULL, NULL, '2021-03-01 16:53:29', '2021-03-01 16:53:29', b'0'),
(2, 'Ojos rojos', 'Pestañinas, delineadore,sombras, etc.', NULL, NULL, '2021-03-01 16:55:09', '2021-03-01 16:55:09', b'1'),
(3, 'Labios', 'Productos como: Lapiz labial, hidratantes.', NULL, NULL, '2021-03-01 17:03:42', '2021-03-01 17:03:42', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE `detalle` (
  `id` int(11) NOT NULL,
  `productoID` int(11) DEFAULT NULL,
  `pedidoID` int(11) DEFAULT NULL,
  `valorUnidad` decimal(10,0) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id`, `nombre`, `usuarioCreacion`, `usuarioActualizacion`) VALUES
(1, 'Indefinido', NULL, NULL),
(2, 'Femenino', NULL, NULL),
(3, 'Masculino', NULL, NULL),
(4, 'Prefiero no Decir', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `clienteID` int(11) DEFAULT NULL,
  `total` decimal(10,0) NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `clienteID`, `total`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(1, 2, '2', NULL, NULL, '2021-03-03 03:11:50', '2021-03-03 03:11:50', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tipoDocumentoID` int(11) DEFAULT NULL,
  `numeroDocumento` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `generoID` int(11) DEFAULT NULL,
  `correoElectronico` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombre`, `apellido`, `tipoDocumentoID`, `numeroDocumento`, `fechaNacimiento`, `generoID`, `correoElectronico`, `telefono`, `direccion`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(1, 'Aleja', 'Rodriguez', 1, '1075317104', '1998-12-26', 2, 'mairatovar56@gmail.c', '3167346814', 'Vereda Alto Pedregal - Rivera Huila', NULL, NULL, '2021-03-01 09:30:54', '2021-03-01 09:30:54', b'1'),
(2, 'Arcelia', 'Tovar', 1, '26559854', '1970-01-25', 2, 'arcelia@gmail.com', '3152913727', 'Vereda Alto Pedregal - Rivera Huila', NULL, NULL, '2021-03-01 16:07:07', '2021-03-01 16:07:07', b'1'),
(6, 'Kyara', 'Rodriguez', 1, '1111111', '1998-12-26', 2, 'kyara@gmail.c', '43434344', 'Vereda Alto Pedregal - Rivera Huila', NULL, NULL, '2021-03-03 02:22:56', '2021-03-03 02:22:56', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `categoriaID` int(11) DEFAULT NULL,
  `valorUnidadCompra` decimal(10,0) NOT NULL,
  `valorUnidadCliente` decimal(10,0) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `categoriaID`, `valorUnidadCompra`, `valorUnidadCliente`, `cantidad`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(1, 'Paleta de sombras Mariposa', 'Textura suave, Alta Pigmentación.', 2, '25000', '35000', 0, NULL, NULL, '2021-03-01 17:07:07', '2021-03-01 17:07:07', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productoproveedor`
--

CREATE TABLE `productoproveedor` (
  `id` int(11) NOT NULL,
  `productoID` int(11) DEFAULT NULL,
  `proveedorID` int(11) DEFAULT NULL,
  `cantidadProducto` decimal(10,0) NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productoproveedor`
--

INSERT INTO `productoproveedor` (`id`, `productoID`, `proveedorID`, `cantidadProducto`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(1, 1, 1, '2', NULL, NULL, '2021-03-01 20:29:09', '2021-03-01 20:29:09', b'0'),
(2, 1, 1, '4', NULL, NULL, '2021-03-01 20:30:01', '2021-03-01 20:30:01', b'0'),
(3, 1, 1, '6', NULL, NULL, '2021-03-01 20:46:10', '2021-03-01 20:46:10', b'1'),
(4, 1, 1, '3', NULL, NULL, '2021-03-02 16:18:01', '2021-03-02 16:18:01', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `id` int(11) NOT NULL,
  `razonSocial` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tipodocumentoID` int(11) NOT NULL,
  `numeroDocumento` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `correoElectronico` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`id`, `razonSocial`, `tipodocumentoID`, `numeroDocumento`, `direccion`, `telefono`, `correoElectronico`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(1, 'Sol y luna', 4, '234753', 'Neiva', '32324', 'solluna@gmail.com', NULL, NULL, '2021-03-01 19:59:21', '2021-03-01 19:59:21', b'1'),
(2, 'Tomaticos', 4, '445231', 'Bogota', '342321', 'tomatico@gmail.com', NULL, NULL, '2021-03-01 20:00:06', '2021-03-01 20:00:06', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre`, `descripcion`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(2, 'Admin7', 'Derecho a la manipulación de datos.', NULL, NULL, '2021-03-01 08:09:08', '2021-03-01 08:09:08', b'1'),
(3, 'Cliente', 'Derecho solo a Compras', NULL, NULL, '2021-03-01 08:11:49', '2021-03-01 08:11:49', b'0'),
(4, 'estudiante', 'Rol del estudiante', NULL, NULL, '2021-03-02 21:34:18', '2021-03-02 21:34:18', b'1'),
(6, 'estudiante 6', 'Rol del estudiante', NULL, NULL, '2021-03-02 21:37:57', '2021-03-02 21:37:57', b'0'),
(7, 'estudiante 2', 'Rol del estudiante', NULL, NULL, '2021-03-02 21:50:51', '2021-03-02 21:50:51', b'1'),
(8, 'Proveedor', 'Rol del provvvedo', NULL, NULL, '2021-03-03 10:13:45', '2021-03-03 10:13:45', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles1`
--

CREATE TABLE `roles1` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `roles1`
--

INSERT INTO `roles1` (`id`, `nombre`) VALUES
(1, 'admin'),
(2, 'cliente'),
(3, 'hola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodocumento`
--

CREATE TABLE `tipodocumento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipodocumento`
--

INSERT INTO `tipodocumento` (`id`, `nombre`, `usuarioCreacion`, `usuarioActualizacion`) VALUES
(1, 'Cedula de Ciudadanía', NULL, NULL),
(2, 'Cedula de Extranjería', NULL, NULL),
(3, 'Tarjeta de Identidad', NULL, NULL),
(4, 'NIT', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `contrasena` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `rolID` int(11) NOT NULL,
  `personaID` int(11) NOT NULL,
  `usuarioCreacion` int(11) DEFAULT NULL,
  `usuarioActualizacion` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaActualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `contrasena`, `rolID`, `personaID`, `usuarioCreacion`, `usuarioActualizacion`, `fechaCreacion`, `fechaActualizacion`, `estado`) VALUES
(1, 'alerod', '1234', 2, 1, NULL, NULL, '2021-03-01 10:18:37', '2021-03-01 10:18:37', b'0'),
(2, 'arctov', '54321', 2, 2, NULL, NULL, '2021-03-01 16:07:53', '2021-03-01 16:07:53', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario1`
--

CREATE TABLE `usuario1` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `celular` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuario1`
--

INSERT INTO `usuario1` (`id`, `usuario`, `celular`) VALUES
(1, 'usu1', 3233),
(2, 'usu2', 3233);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta1`
--

CREATE TABLE `venta1` (
  `id` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `idrol` int(11) NOT NULL,
  `compra` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `venta1`
--

INSERT INTO `venta1` (`id`, `idusuario`, `idrol`, `compra`) VALUES
(1, 1, 1, 5),
(2, 1, 1, 5),
(3, 2, 2, 5);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `viewpedido`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `viewpedido` (
`id` int(11)
,`nombreProduct` varchar(100)
,`desProduct` varchar(500)
,`razonSocial` varchar(200)
,`cantidadProducto` decimal(10,0)
,`fechaCreacion` datetime
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `viewpersona`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `viewpersona` (
`ID` int(11)
,`nombre` varchar(100)
,`apellido` varchar(100)
,`desTipoDocumento` varchar(100)
,`numeroDocumento` varchar(15)
,`fechaNacimiento` date
,`desGenero` varchar(100)
,`telefono` varchar(15)
,`correo` varchar(20)
,`direccion` varchar(50)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `viewproducto`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `viewproducto` (
`id` int(11)
,`nombre` varchar(100)
,`descripcion` varchar(500)
,`nombreCategoria` varchar(100)
,`valorUnidadCompra` decimal(10,0)
,`valorUnidadCliente` decimal(10,0)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `viewproveedor`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `viewproveedor` (
`id` int(11)
,`razonSocial` varchar(200)
,`tipoDocumento` varchar(100)
,`numeroDocumento` varchar(15)
,`direccion` varchar(100)
,`telefono` varchar(15)
,`correoElectronico` varchar(50)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `viewusuario`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `viewusuario` (
`ID` int(11)
,`usuario` varchar(100)
,`nombrePersona` varchar(100)
,`apellidoPersona` varchar(100)
,`nombreRol` varchar(100)
,`desRol` varchar(200)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `viewpedido`
--
DROP TABLE IF EXISTS `viewpedido`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewpedido`  AS  select `pp`.`id` AS `id`,`pro`.`nombre` AS `nombreProduct`,`pro`.`descripcion` AS `desProduct`,`prov`.`razonSocial` AS `razonSocial`,`pp`.`cantidadProducto` AS `cantidadProducto`,`pp`.`fechaCreacion` AS `fechaCreacion` from ((`productoproveedor` `pp` join `producto` `pro` on((`pro`.`id` = `pp`.`productoID`))) join `proveedor` `prov` on((`prov`.`id` = `pp`.`proveedorID`))) where (`pp`.`estado` = 1) order by `pp`.`id` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `viewpersona`
--
DROP TABLE IF EXISTS `viewpersona`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewpersona`  AS  select `pe`.`id` AS `ID`,`pe`.`nombre` AS `nombre`,`pe`.`apellido` AS `apellido`,`tp`.`nombre` AS `desTipoDocumento`,`pe`.`numeroDocumento` AS `numeroDocumento`,`pe`.`fechaNacimiento` AS `fechaNacimiento`,`gp`.`nombre` AS `desGenero`,`pe`.`telefono` AS `telefono`,`pe`.`correoElectronico` AS `correo`,`pe`.`direccion` AS `direccion` from ((`persona` `pe` join `tipodocumento` `tp` on((`pe`.`tipoDocumentoID` = `tp`.`id`))) join `genero` `gp` on((`pe`.`generoID` = `gp`.`id`))) where (`pe`.`estado` = 1) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `viewproducto`
--
DROP TABLE IF EXISTS `viewproducto`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewproducto`  AS  select `pr`.`id` AS `id`,`pr`.`nombre` AS `nombre`,`pr`.`descripcion` AS `descripcion`,`ca`.`nombre` AS `nombreCategoria`,`pr`.`valorUnidadCompra` AS `valorUnidadCompra`,`pr`.`valorUnidadCliente` AS `valorUnidadCliente` from (`producto` `pr` join `categoria` `ca` on((`ca`.`id` = `pr`.`categoriaID`))) where (`pr`.`estado` = 1) order by `pr`.`id` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `viewproveedor`
--
DROP TABLE IF EXISTS `viewproveedor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewproveedor`  AS  select `pr`.`id` AS `id`,`pr`.`razonSocial` AS `razonSocial`,`tp`.`nombre` AS `tipoDocumento`,`pr`.`numeroDocumento` AS `numeroDocumento`,`pr`.`direccion` AS `direccion`,`pr`.`telefono` AS `telefono`,`pr`.`correoElectronico` AS `correoElectronico` from (`proveedor` `pr` join `tipodocumento` `tp` on((`tp`.`id` = `pr`.`tipodocumentoID`))) where (`pr`.`estado` = 1) order by `pr`.`id` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `viewusuario`
--
DROP TABLE IF EXISTS `viewusuario`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewusuario`  AS  select `usu`.`id` AS `ID`,`usu`.`usuario` AS `usuario`,`pe`.`nombre` AS `nombrePersona`,`pe`.`apellido` AS `apellidoPersona`,`rol`.`nombre` AS `nombreRol`,`rol`.`descripcion` AS `desRol` from ((`usuario` `usu` join `persona` `pe` on((`pe`.`id` = `usu`.`personaID`))) join `rol` on((`rol`.`id` = `usu`.`rolID`))) where (`usu`.`estado` = 1) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `atencion1`
--
ALTER TABLE `atencion1`
  ADD PRIMARY KEY (`idAtencion`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `FK_usuario2` (`usuarioCreacion`),
  ADD KEY `FK_usuario3` (`usuarioActualizacion`);

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productoID` (`productoID`),
  ADD KEY `FK_usuario0` (`usuarioCreacion`),
  ADD KEY `FK_usuario1` (`usuarioActualizacion`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_usuario4` (`usuarioCreacion`),
  ADD KEY `FK_usuario5` (`usuarioActualizacion`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_persona0` (`clienteID`),
  ADD KEY `FK_usuario6` (`usuarioCreacion`),
  ADD KEY `FK_usuario7` (`usuarioActualizacion`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD UNIQUE KEY `numeroDocumento` (`numeroDocumento`),
  ADD KEY `FK_tipoDocumento0` (`tipoDocumentoID`),
  ADD KEY `FK_generoID0` (`generoID`),
  ADD KEY `FK_usuario8` (`usuarioCreacion`),
  ADD KEY `FK_usuario9` (`usuarioActualizacion`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `FK_categoria0` (`categoriaID`),
  ADD KEY `FK_usuario10` (`usuarioCreacion`),
  ADD KEY `FK_usuario11` (`usuarioActualizacion`);

--
-- Indices de la tabla `productoproveedor`
--
ALTER TABLE `productoproveedor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_producto1` (`productoID`),
  ADD KEY `FK_proveedor` (`proveedorID`),
  ADD KEY `FK_usuario12` (`usuarioCreacion`),
  ADD KEY `FK_usuario13` (`usuarioActualizacion`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `razonSocial` (`razonSocial`),
  ADD UNIQUE KEY `numeroDocumento` (`numeroDocumento`),
  ADD KEY `FK_tipoDocumento1` (`tipodocumentoID`),
  ADD KEY `FK_usuario14` (`usuarioCreacion`),
  ADD KEY `FK_usuario15` (`usuarioActualizacion`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `FK_usuario16` (`usuarioCreacion`),
  ADD KEY `FK_usuario17` (`usuarioActualizacion`);

--
-- Indices de la tabla `roles1`
--
ALTER TABLE `roles1`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `FK_usuario18` (`usuarioCreacion`),
  ADD KEY `FK_usuario19` (`usuarioActualizacion`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `FK_usuario20` (`usuarioCreacion`),
  ADD KEY `FK_usuario21` (`usuarioActualizacion`),
  ADD KEY `FK_rol0` (`rolID`),
  ADD KEY `FK_persona2` (`personaID`);

--
-- Indices de la tabla `usuario1`
--
ALTER TABLE `usuario1`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `venta1`
--
ALTER TABLE `venta1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `atencion1`
--
ALTER TABLE `atencion1`
  MODIFY `idAtencion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productoproveedor`
--
ALTER TABLE `productoproveedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `roles1`
--
ALTER TABLE `roles1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario1`
--
ALTER TABLE `usuario1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `venta1`
--
ALTER TABLE `venta1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `FK_usuario2` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario3` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD CONSTRAINT `FK_producto0` FOREIGN KEY (`productoID`) REFERENCES `producto` (`id`),
  ADD CONSTRAINT `FK_usuario0` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario1` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `genero`
--
ALTER TABLE `genero`
  ADD CONSTRAINT `FK_usuario4` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario5` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK_persona0` FOREIGN KEY (`clienteID`) REFERENCES `persona` (`id`),
  ADD CONSTRAINT `FK_usuario6` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario7` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `FK_generoID0` FOREIGN KEY (`generoID`) REFERENCES `genero` (`id`),
  ADD CONSTRAINT `FK_tipoDocumento0` FOREIGN KEY (`tipoDocumentoID`) REFERENCES `tipodocumento` (`id`),
  ADD CONSTRAINT `FK_usuario8` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario9` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `FK_categoria0` FOREIGN KEY (`categoriaID`) REFERENCES `categoria` (`id`),
  ADD CONSTRAINT `FK_usuario10` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario11` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `productoproveedor`
--
ALTER TABLE `productoproveedor`
  ADD CONSTRAINT `FK_producto1` FOREIGN KEY (`productoID`) REFERENCES `producto` (`id`),
  ADD CONSTRAINT `FK_proveedor` FOREIGN KEY (`proveedorID`) REFERENCES `proveedor` (`id`),
  ADD CONSTRAINT `FK_usuario12` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario13` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD CONSTRAINT `FK_tipoDocumento1` FOREIGN KEY (`tipodocumentoID`) REFERENCES `tipodocumento` (`id`),
  ADD CONSTRAINT `FK_usuario14` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario15` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `rol`
--
ALTER TABLE `rol`
  ADD CONSTRAINT `FK_usuario16` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario17` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
  ADD CONSTRAINT `FK_usuario18` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario19` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK_persona2` FOREIGN KEY (`personaID`) REFERENCES `persona` (`id`),
  ADD CONSTRAINT `FK_rol0` FOREIGN KEY (`rolID`) REFERENCES `rol` (`id`),
  ADD CONSTRAINT `FK_usuario20` FOREIGN KEY (`usuarioCreacion`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `FK_usuario21` FOREIGN KEY (`usuarioActualizacion`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
