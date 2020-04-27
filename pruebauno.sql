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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

/*Data for the table `asigna_materia_docente` */

insert  into `asigna_materia_docente`(`id_amd`,`id_docente`,`id_materia`,`id_periodo`) values 
(9,2,3,3),
(10,2,3,2);

/*Table structure for table `docentes` */

DROP TABLE IF EXISTS `docentes`;

CREATE TABLE `docentes` (
  `id_docente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_docen` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_docente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `docentes` */

insert  into `docentes`(`id_docente`,`nombre_docen`,`edad`,`correo`) values 
(1,'leo',69,'leo69@master.com'),
(2,'carlos',90,'carlos90@anciano.com'),
(5,'pedro',13,'asdnasd@asdhasud.com'),
(7,'12312',2,'sdasd');

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id_estudiantes` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estu` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_estudiantes`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`id_estudiantes`,`nombre_estu`,`edad`,`correo`) values 
(1,'felipe',18,'felipecarvajal63@gmail.com'),
(2,'diego',18,'diegopro777@pipi.com'),
(3,'eber',100,'anciano_de_mierda@gmail.com'),
(4,'cristian',2,'2añitos@gmail.com'),
(5,'juan',13,'asdnasd@asdhasud.com'),
(6,'wda',0,'12e2');

/*Table structure for table `materia` */

DROP TABLE IF EXISTS `materia`;

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL AUTO_INCREMENT,
  `materia` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `materia` */

insert  into `materia`(`id_materia`,`materia`) values 
(1,'electiva de formacion complementaria'),
(2,'pipi'),
(3,'ingles');

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

/*Data for the table `notas` */

insert  into `notas`(`id_notas`,`id_estudiantes`,`nota`,`id_docentes`,`id_materia`,`id_periodo`) values 
(12,2,3.00,2,3,2);

/*Table structure for table `periodo_academico` */

DROP TABLE IF EXISTS `periodo_academico`;

CREATE TABLE `periodo_academico` (
  `id_periodo` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `periodo_academico` */

insert  into `periodo_academico`(`id_periodo`,`periodo`) values 
(1,'1'),
(2,'2'),
(3,'3'),
(4,'4');

/*Table structure for table `personas` */

DROP TABLE IF EXISTS `personas`;

CREATE TABLE `personas` (
  `id_personas` int(11) NOT NULL AUTO_INCREMENT,
  `documento` int(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `tipo` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_personas`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

/*Data for the table `personas` */

insert  into `personas`(`id_personas`,`documento`,`nombre`,`tipo`) values 
(8,1003805261,'juan felipe carvajal pineda',3),
(9,2147483647,'diego alexander',3),
(16,64564,'cindy',2),
(17,69,'leonardo',1),
(18,2147483647,'juan',3),
(19,12312,'sadas',2),
(20,12321,'asdsa',1);

/*Table structure for table `postulados` */

DROP TABLE IF EXISTS `postulados`;

CREATE TABLE `postulados` (
  `id_postulados` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `votos` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_postulados`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `postulados` */

insert  into `postulados`(`id_postulados`,`nombre`,`votos`) values 
(5,'juan felipe carvajal pineda',NULL),
(6,'juan',NULL),
(7,NULL,0);

/*Table structure for table `tipos` */

DROP TABLE IF EXISTS `tipos`;

CREATE TABLE `tipos` (
  `id_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `tipos` */

insert  into `tipos`(`id_tipo`,`tipo`) values 
(1,'docente'),
(2,'administrativo'),
(3,'estudiante');

/*Table structure for table `votos` */

DROP TABLE IF EXISTS `votos`;

CREATE TABLE `votos` (
  `id_voto` int(11) NOT NULL AUTO_INCREMENT,
  `documento` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `voto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_voto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `votos` */

insert  into `votos`(`id_voto`,`documento`,`nombre`,`voto`) values 
(1,'64564','cindy','juan felipe carvajal pineda'),
(2,'64564','cindy','juan felipe carvajal pineda'),
(3,'69','leonardo','juan');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
