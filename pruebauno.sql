/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.4.8-MariaDB : Database - pruebauno
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pruebauno` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `pruebauno`;

/*Table structure for table `asigna_materia_docente` */

DROP TABLE IF EXISTS `asigna_materia_docente`;

CREATE TABLE `asigna_materia_docente` (
  `id_amd` int(11) NOT NULL AUTO_INCREMENT,
  `id_docente` int(11) DEFAULT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `id_periodo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_amd`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `asigna_materia_docente` */

insert  into `asigna_materia_docente`(`id_amd`,`id_docente`,`id_materia`,`id_periodo`) values 
(1,1,1,1);

/*Table structure for table `docentes` */

DROP TABLE IF EXISTS `docentes`;

CREATE TABLE `docentes` (
  `id_docente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_docen` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_docente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `docentes` */

insert  into `docentes`(`id_docente`,`nombre_docen`,`edad`,`correo`) values 
(1,'leo',69,'leo69@master.com'),
(2,'carlos',90,'carlos90@anciano.com');

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id_estudiantes` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estu` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_estudiantes`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`id_estudiantes`,`nombre_estu`,`edad`,`correo`) values 
(1,'felipe',18,'felipecarvajal63@gmail.com'),
(2,'diego',18,'diegopro777@pipi.com'),
(3,'eber',100,'anciano_de_mierda@gmail.com'),
(4,'cristian',2,'2añitos@gmail.com');

/*Table structure for table `materia` */

DROP TABLE IF EXISTS `materia`;

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL AUTO_INCREMENT,
  `materia` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `materia` */

insert  into `materia`(`id_materia`,`materia`) values 
(1,'electiva de formacion complementaria');

/*Table structure for table `notas` */

DROP TABLE IF EXISTS `notas`;

CREATE TABLE `notas` (
  `id_notas` int(11) NOT NULL AUTO_INCREMENT,
  `id_estudiantes` int(11) DEFAULT NULL,
  `nota` decimal(10,2) DEFAULT NULL,
  `id_docentes` int(11) DEFAULT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `id_periodo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_notas`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `notas` */

insert  into `notas`(`id_notas`,`id_estudiantes`,`nota`,`id_docentes`,`id_materia`,`id_periodo`) values 
(1,1,5.00,1,1,2);

/*Table structure for table `periodo_academico` */

DROP TABLE IF EXISTS `periodo_academico`;

CREATE TABLE `periodo_academico` (
  `id_periodo` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `periodo_academico` */

insert  into `periodo_academico`(`id_periodo`,`periodo`) values 
(1,'1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
