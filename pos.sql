-- MariaDB dump 10.17  Distrib 10.5.1-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: pos
-- ------------------------------------------------------
-- Server version	10.5.1-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bodega`
--

DROP TABLE IF EXISTS `bodega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bodega` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Bodega` int(11) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodega`
--

LOCK TABLES `bodega` WRITE;
/*!40000 ALTER TABLE `bodega` DISABLE KEYS */;
/*!40000 ALTER TABLE `bodega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clase_producto`
--

DROP TABLE IF EXISTS `clase_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clase_producto` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Clase_Producto` int(11) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clase_producto`
--

LOCK TABLES `clase_producto` WRITE;
/*!40000 ALTER TABLE `clase_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `clase_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conexion`
--

DROP TABLE IF EXISTS `conexion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conexion` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `URL_Core` varchar(150) DEFAULT NULL,
  `Base_Datos` varchar(45) DEFAULT NULL,
  `Key_Empresa` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conexion`
--

LOCK TABLES `conexion` WRITE;
/*!40000 ALTER TABLE `conexion` DISABLE KEYS */;
/*!40000 ALTER TABLE `conexion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `control_sync`
--

DROP TABLE IF EXISTS `control_sync`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `control_sync` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Sync` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control_sync`
--

LOCK TABLES `control_sync` WRITE;
/*!40000 ALTER TABLE `control_sync` DISABLE KEYS */;
/*!40000 ALTER TABLE `control_sync` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_correntista`
--

DROP TABLE IF EXISTS `cuenta_correntista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta_correntista` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Cuenta_Correntista` int(11) DEFAULT NULL,
  `ID_Cuenta` int(11) DEFAULT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `NIT` varchar(45) DEFAULT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  `Telefono` varchar(45) DEFAULT NULL,
  `Celular` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Factura_NIT` varchar(45) DEFAULT NULL,
  `Factura_Nombre` varchar(100) DEFAULT NULL,
  `Factura_Direccion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_correntista`
--

LOCK TABLES `cuenta_correntista` WRITE;
/*!40000 ALTER TABLE `cuenta_correntista` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuenta_correntista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_correntista_rel`
--

DROP TABLE IF EXISTS `cuenta_correntista_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta_correntista_rel` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Cuenta_Correntista` int(11) DEFAULT NULL,
  `F_Cuenta_Correntista` int(11) DEFAULT NULL,
  `F_Cuenta_Cta` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_correntista_rel`
--

LOCK TABLES `cuenta_correntista_rel` WRITE;
/*!40000 ALTER TABLE `cuenta_correntista_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuenta_correntista_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_cta`
--

DROP TABLE IF EXISTS `cuenta_cta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta_cta` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Cuenta_Correntista` int(11) DEFAULT NULL,
  `Cuenta_Cta` varchar(45) DEFAULT NULL,
  `Validar_Tipo_Precio` varchar(45) DEFAULT NULL,
  `Permitir_CxC` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_cta`
--

LOCK TABLES `cuenta_cta` WRITE;
/*!40000 ALTER TABLE `cuenta_cta` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuenta_cta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_precio`
--

DROP TABLE IF EXISTS `cuenta_precio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta_precio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Cuenta_Correntista` int(11) DEFAULT NULL,
  `Cuenta_Cta` varchar(45) DEFAULT NULL,
  `Producto` int(11) DEFAULT NULL,
  `Unidad_Medida` int(11) DEFAULT NULL,
  `Tipo_Precio` int(11) DEFAULT NULL,
  `Precio_Unidad` decimal(18,4) DEFAULT NULL,
  `Descuento_Por` decimal(18,4) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_precio`
--

LOCK TABLES `cuenta_precio` WRITE;
/*!40000 ALTER TABLE `cuenta_precio` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuenta_precio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_tipo_precio`
--

DROP TABLE IF EXISTS `cuenta_tipo_precio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta_tipo_precio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Cuenta_Correntista` int(11) DEFAULT NULL,
  `Cuenta_Cta` varchar(45) DEFAULT NULL,
  `Tipo_Precio` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_tipo_precio`
--

LOCK TABLES `cuenta_tipo_precio` WRITE;
/*!40000 ALTER TABLE `cuenta_tipo_precio` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuenta_tipo_precio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dispositivo`
--

DROP TABLE IF EXISTS `dispositivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dispositivo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(100) DEFAULT NULL,
  `UDID` varchar(200) DEFAULT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dispositivo`
--

LOCK TABLES `dispositivo` WRITE;
/*!40000 ALTER TABLE `dispositivo` DISABLE KEYS */;
/*!40000 ALTER TABLE `dispositivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Empresa` int(11) DEFAULT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Razon_Social` varchar(100) DEFAULT NULL,
  `NIT` varchar(45) DEFAULT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `Telefono` varchar(45) DEFAULT NULL,
  `Correo_Electronico` varchar(100) DEFAULT NULL,
  `Pagina_Web` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `error`
--

DROP TABLE IF EXISTS `error`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `error` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(800) DEFAULT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Fecha_Hora` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `error`
--

LOCK TABLES `error` WRITE;
/*!40000 ALTER TABLE `error` DISABLE KEYS */;
/*!40000 ALTER TABLE `error` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `impresora`
--

DROP TABLE IF EXISTS `impresora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `impresora` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `IP` varchar(45) DEFAULT NULL,
  `Puerto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `impresora`
--

LOCK TABLES `impresora` WRITE;
/*!40000 ALTER TABLE `impresora` DISABLE KEYS */;
/*!40000 ALTER TABLE `impresora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inventario` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Bodega` int(11) DEFAULT NULL,
  `Producto` int(11) DEFAULT NULL,
  `Unidad_Medida` int(11) DEFAULT NULL,
  `Cantidad` decimal(18,4) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `precio`
--

DROP TABLE IF EXISTS `precio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `precio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Precio` int(11) DEFAULT NULL,
  `Bodega` int(11) DEFAULT NULL,
  `Producto` int(11) DEFAULT NULL,
  `Unidad_Medida` int(11) DEFAULT NULL,
  `Tipo_Precio` int(11) DEFAULT NULL,
  `Moneda` int(11) DEFAULT NULL,
  `Precio_Unidad` decimal(18,4) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `precio`
--

LOCK TABLES `precio` WRITE;
/*!40000 ALTER TABLE `precio` DISABLE KEYS */;
/*!40000 ALTER TABLE `precio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Producto` int(11) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  `Clase_Producto` int(11) DEFAULT NULL,
  `Tipo_Producto` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_u_m`
--

DROP TABLE IF EXISTS `producto_u_m`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_u_m` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Producto` int(11) DEFAULT NULL,
  `Unidad_Medida` int(11) DEFAULT NULL,
  `Producto_Id` varchar(100) DEFAULT NULL,
  `Id_Producto_Alterno` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_u_m`
--

LOCK TABLES `producto_u_m` WRITE;
/*!40000 ALTER TABLE `producto_u_m` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_u_m` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `s_doc_parametro`
--

DROP TABLE IF EXISTS `s_doc_parametro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `s_doc_parametro` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Documento` int(11) DEFAULT NULL,
  `Serie_Documento` varchar(45) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  `Estacion_Trabajo` int(11) DEFAULT NULL,
  `Parametro` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `s_doc_parametro`
--

LOCK TABLES `s_doc_parametro` WRITE;
/*!40000 ALTER TABLE `s_doc_parametro` DISABLE KEYS */;
/*!40000 ALTER TABLE `s_doc_parametro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `s_doc_t_car_abo`
--

DROP TABLE IF EXISTS `s_doc_t_car_abo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `s_doc_t_car_abo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Documento` int(11) DEFAULT NULL,
  `Serie_Documento` varchar(45) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  `Tipo_Cargo_Abono` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `s_doc_t_car_abo`
--

LOCK TABLES `s_doc_t_car_abo` WRITE;
/*!40000 ALTER TABLE `s_doc_t_car_abo` DISABLE KEYS */;
/*!40000 ALTER TABLE `s_doc_t_car_abo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `s_doc_t_tra`
--

DROP TABLE IF EXISTS `s_doc_t_tra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `s_doc_t_tra` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Documento` int(11) DEFAULT NULL,
  `Serie_Documento` varchar(45) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  `Tipo_Transaccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `s_doc_t_tra`
--

LOCK TABLES `s_doc_t_tra` WRITE;
/*!40000 ALTER TABLE `s_doc_t_tra` DISABLE KEYS */;
/*!40000 ALTER TABLE `s_doc_t_tra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serie_documento`
--

DROP TABLE IF EXISTS `serie_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serie_documento` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Documento` int(11) DEFAULT NULL,
  `Serie_Documento` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serie_documento`
--

LOCK TABLES `serie_documento` WRITE;
/*!40000 ALTER TABLE `serie_documento` DISABLE KEYS */;
/*!40000 ALTER TABLE `serie_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serie_documento_user`
--

DROP TABLE IF EXISTS `serie_documento_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serie_documento_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Documento` int(11) DEFAULT NULL,
  `Serie_Documento` varchar(45) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serie_documento_user`
--

LOCK TABLES `serie_documento_user` WRITE;
/*!40000 ALTER TABLE `serie_documento_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `serie_documento_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_cargo_abono`
--

DROP TABLE IF EXISTS `tipo_cargo_abono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_cargo_abono` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Cargo_Abono` int(11) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  `Cuenta_Corriente` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_cargo_abono`
--

LOCK TABLES `tipo_cargo_abono` WRITE;
/*!40000 ALTER TABLE `tipo_cargo_abono` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_cargo_abono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_documento` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Documento` int(11) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_transaccion`
--

DROP TABLE IF EXISTS `tipo_transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_transaccion` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Transaccion` int(11) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_transaccion`
--

LOCK TABLES `tipo_transaccion` WRITE;
/*!40000 ALTER TABLE `tipo_transaccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_transaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidad_medida`
--

DROP TABLE IF EXISTS `unidad_medida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unidad_medida` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Unidad_Medida` int(11) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidad_medida`
--

LOCK TABLES `unidad_medida` WRITE;
/*!40000 ALTER TABLE `unidad_medida` DISABLE KEYS */;
/*!40000 ALTER TABLE `unidad_medida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_bodega`
--

DROP TABLE IF EXISTS `user_bodega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_bodega` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(45) DEFAULT NULL,
  `Bodega` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_bodega`
--

LOCK TABLES `user_bodega` WRITE;
/*!40000 ALTER TABLE `user_bodega` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_bodega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(30) DEFAULT NULL,
  `Pass_Key` varchar(50) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Empresa` int(11) DEFAULT NULL,
  `Estacion_Trabajo` int(11) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Cuenta_Correntista` int(11) DEFAULT NULL,
  `Aplication` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-24 23:20:07
