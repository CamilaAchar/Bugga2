-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: bugga
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'LEANDRO VESCO '),(2,'LOVEDAY TRINICK'),(3,'S. NACHMANOVITCH'),(4,'ESTANISLAO BACHRACH'),(5,'FACUNDO MANES'),(6,'MARCELO CICERI'),(7,'ALBERTO CUEVAS ALVAREZ'),(8,'WINSTON CHURCHILL'),(9,'NICOLAS MAQUIAVELO'),(10,'ANDREA MILANO'),(11,'TAYLOR JENKINS REID'),(12,'SALIM LAMRANI'),(13,'JIM AFREMOW'),(14,'ALFREDO ROMANO'),(15,'ADAM SMITH'),(16,'CONGRESO NACIONAL'),(17,'DUNCAN KENNEDY'),(18,'JAMES DASHNER'),(19,'STEPHANIE GARBER'),(20,'Stephen King'),(23,'CLAUDIA CESARONI'),(24,'MATIAS IACONO');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Turismo  '),(2,'Infantil y Juvenil'),(3,'Ficción y Literatura'),(4,'Politica'),(5,'Historia'),(6,'Programacion Y Lenguajes'),(7,'Computación En General'),(8,'Divulgación Científica'),(9,'Arte, Arquitectura y Diseño'),(10,'Derecho'),(11,'Economia'),(12,'Deportes y Recreación');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `id_author` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `date_entry` date NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e7a16b01-e593-4da3-a730-29825132e39c` (`id_author`),
  KEY `FK_081d4a46-c241-418a-848b-20a2b599a3fe` (`id_category`),
  CONSTRAINT `FK_081d4a46-c241-418a-848b-20a2b599a3fe` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`),
  CONSTRAINT `FK_e7a16b01-e593-4da3-a730-29825132e39c` FOREIGN KEY (`id_author`) REFERENCES `author` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'MAZE RUNNER EL PALACIO DE LOS CRANKS',18,2,1995,'MAZE RUNNER EL PALACIO DE LOS CRANKS','2022-01-14','bookImg-1641499542630.png  '),(2,'OCEANARIUM',2,2,2955,'Este acuario está abierto a todas horas y es el hogar de más de 200 criaturas que viven o dependen del océano para sobrevivir. Desde el diminuto plancton hasta las enormes ballenas azules; pasando por una multitud de animales y plantas de inimaginables fo','2022-01-06','bookImg-1641501666628.png      '),(3,'FREE PLAY',3,9,1660,'¿Cómo se aprende a improvisar? ¿O; en todo caso; cómo se aprende cualquier arte? ¿O cualquier cosa? Es una contradicción; un oxímoron. Vaya y dígale a alguien: ¿¡Sé espontáneo!¿. O trate de que alguien se lo diga a usted. Nos sometemos a maestros de músic','2020-02-06','bookImg-1641499620302.png'),(4,'IMPROVISAR',3,9,2190,'Según Stephen Nachmanovitch, los seres humanos somos verbos, no sustantivos: siempre en movimiento, disponibles al cambio y a la sorpresa, muchas veces nos olvidamos de lo que es sentirnos verdaderamente vivos. Por eso, en este libro lúcido, juguetón, ins','2022-01-19','bookImg-1641499653991.png'),(5,'AGILMENTE',4,8,1999,'¿Creés que ser creativo es un atributo de genios y gurúes? Estás equivocado. Seas quien seas podés cambiar. La creatividad puede exp andirse. Hoy la neurociencia es clara: el cerebro aprende hasta el último día de vida. Tu mente; mediante la aplicación de','2022-04-15','bookImg-1641499692681.png'),(6,'SER HUMANOS',5,8,2289,'Estamos frente a una revolución como nunca antes había sucedido; un cambio profundo que no solo transforma lo que hacemos sino también lo que somos. Hoy resulta esencial reconocer qué es aquello que nos hace humanos; cuáles son los lazos que nos sostienen','2022-01-26','bookImg-1641499723300.png'),(7,'INTRODUCCION A LARAVEL',6,7,1584,'Aplicaciones robustas a gran escala con modelos de bases de datos, interfaces de usuario y pruebas automatizas.','2020-10-12','bookImg-1641499753511.png'),(8,'PYTHON 3 CURSO PRACTICO',7,6,3820,'Introducción al mundo de la progamación con Python 3. Multiplicidad de ejercicios para practicar.','2018-09-07','bookImg-1641499790872.png'),(9,'LA SEGUNDA GUERRA MUNDIAL',8,5,4565,'Winston S. Churchill; testigo excepcional de la segunda guerra mundial; brinda un testimonio \'en primera fila\' del campo de batalla con su pluma lúcida e incisiva; y describe el transcurso y los principales episodios: el camino hacia el desastre desde el ','2014-08-20','bookImg-1641499839384.png'),(10,'EL PRINCIPE',9,4,1250,'El príncipe es el primer clásico del pensamiento político moderno. Escrito en 1513 para \'el Magnífico\' Lorenzo de Médicis como un conjunto de reflexiones sobre el arte de conquistar y conservar el poder de un principado; ha sido referencia fundamental no ','1977-02-11','bookImg-1641499882634.png'),(11,'HASTA QUE TE VUELVA A VER',10,3,1699,'Una apasionante novela coral de dos familias que unirán para siempre sus destinos; por sobre los escombros que dejó la guerra; las pasiones prohibidas; las mentiras y el miedo. (...) ','2021-12-22','bookImg-1641499926890.png'),(12,'LOS SIETE MARIDOS DE EVELYN HUGO',11,3,2190,'Evelyn Hugo; el ícono de Hollywood que se ha recluido en su edad madura; decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant; una periodista desconocida; nadie se sorprende más que la ','2020-11-24','bookImg-1641499965340.png'),(13,'EL FUTBOL SEGUN BIELSA',12,12,2049,'El épico recorrido de Marcelo Bielsa al mando del Leeds United durante la campaña 2018-2019; en la que intentó devolver al equipo a la Premier League; la primera división del fútbol inglés; y luego su consagración en la temporada siguiente; narrado por un','2022-01-21','bookImg-1641500099872.png'),(14,'LA MENTE DEL CAMPEON',13,12,2300,'Entre los atletas de elite más deslumbrantes; algunos se destacan claramente del resto: son los que se superan a sí mismos en esos momentos claves que deciden un partido o una competición. Esos atletas prueban que la destreza física natural; por sí sola; ','2022-01-04','bookImg-1641500141510.png'),(15,'DOLARIZAR',14,11,1500,'La debacle argentina se prolonga desde hace más de cuarenta años. Sin embargo; en la última década se han profundizado los problemas de una inflación elevada; devaluación constante de la moneda y el malestar social que proviene de crisis económicas recurr','2020-11-12','bookImg-1641500235110.png'),(16,'LA RIQUEZA DE LAS NACIONES',15,12,2700,'Un paseo sobre esta maravilla revelación del autor.','1537-12-10','bookImg-1641500283675.png'),(17,'CONSTITUCION NACIONAL',16,10,620,'Nos los representantes del pueblo de la Nación Argentina; reunidos en Congreso General Constituyente por voluntad y elección de las provincias que la componen; en cumplimiento de pactos preexistentes; con el objeto de constituir la unión nacional; afianza','1983-02-10','bookImg-1641500338695.png'),(18,'LA ENSENANZA DEL DERECHO',17,10,990,'Duncan Kennedy es uno de los miembros más conocidos del grupo de Estudios Críticos del Derecho; no sólo por desmitificar el ideal de imparcialidad del derecho y revelar su carácter político e ideológico; sino sobre todo por su crítica a la enseñanza juríd','2011-10-07','bookImg-1641500391539.png'),(19,'FINALE (CARAVAL 3)',19,3,2390,'Sumergete en esta increíble aventura','2022-01-28','bookImg-1641498711230.png'),(20,'CONTRA EL PUNITIVISMO',23,10,2,'Punitivismo es suponer que el mero castigo; brutal; expeditivo y cada vez durante más tiempo; resuelve toda una amplia variedad de acontecimientos: desde una indisciplina escolar hasta los discursos de odio. O los hechos más graves; que afectan la vida y la libertad de las personas. ','2022-01-08','bookImg-1641685573161.png '),(23,'PROGRAMACION DE VIDEO JUEGOS',24,6,1990,'Ejemplos prácticos con juegos reales. Frameworks básicos y avanzados. Monetización.','2016-07-13','bookImg-1641686309553.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_name` int(11) NOT NULL,
  `id_author` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `total_purchase` decimal(10,0) NOT NULL,
  `date_purchase` date NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto` (`id_name`),
  KEY `author` (`id_author`),
  KEY `user` (`id_user`),
  CONSTRAINT `author` FOREIGN KEY (`id_author`) REFERENCES `author` (`id`),
  CONSTRAINT `producto` FOREIGN KEY (`id_name`) REFERENCES `products` (`id`),
  CONSTRAINT `user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `born` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `interest` varchar(255) DEFAULT NULL,
  `pass` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Matias Vieira','mvieira@gmail.com','0000-00-00','',NULL,'$2a$10$MaB8CIbw9pwHKU51tvLHnuiEpGmRNXu/1l0WsdBkB8ceSH4FkUNTS',''),(3,'Daniel Fuentes','dfuentes@gmail.com','0000-00-00','',NULL,'$2a$10$/xTcB4tcnQ.CqNpXZWbrIent2Ly4frqxlpCOM6Gukacz.J8CGBXhq',''),(5,'Lucas Galletti','lucas.galletti@gmail.com','0000-00-00','',NULL,'$2a$10$ZFcHfV/QFRWzlU2v1pYlDuijy2QL83JNy58mraKSfs3fAxhQrZrke','registerImg-1641845178005.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bugga'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-12 17:51:42
