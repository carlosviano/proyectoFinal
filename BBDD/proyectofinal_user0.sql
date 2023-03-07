-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectofinal
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `email` varchar(128) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT '0',
  `img` varchar(128) DEFAULT NULL,
  `reg_date` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `idusuario_UNIQUE` (`iduser`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'carlitosviano@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','carlino','vianillo','1','images/products/luffy.png','2023-02-14 ','vianilloNEW'),(2,'nachoviano@gmail.com','12345','Nacho','Viano','0','images/products/luffyPP.jpg',NULL,'matacamperos4'),(3,'pabloviano@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Pablo','Viano','0','images/products/pngwing.com (5).png','2023-02-14 ','serranillo'),(4,'skkt1ampa@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Adrian','Parrado','0','images/products/luffyPP.jpg','2023-02-14 ','notgoingto'),(5,'albertoriesgo@hotmail.es','4297f44b13955235245b2497399d7a93','Albert','riesgo','0','images/products/Singed_0.jpg','2023-02-14 ','wildrisk'),(6,'viano60@gmail.com','e3db084ceb14a733d5872ead06de07a3','Carlos','Viano Martinez','0','images/products/luffy.png','2023-02-14 ','crviano'),(7,'merlo@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Merlo','Merlo','0','images/products/onePiece.jpg','2023-02-14 ','merlomaster'),(8,'alemartin@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Ale','Martin','0','images/products/onePiece.jpg','2023-02-19','alexdeltaco'),(9,'pepepe@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','pepe','epep','0','images/products/onePiece.jpg','2023-02-25',NULL),(10,'goku12@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Jorge','Alonnnso','0','images/products/onePiece.jpg','2023-02-28','jorge'),(11,'danivalde33333@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Dani','dani','0','images/products/luffy.png','2023-02-28','cdsdcsdsd'),(12,'juandani@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Juan Dani','Juan Dani','0','images/products/onePiece.jpg','2023-02-28',NULL),(13,'JUANWUACHO@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','JuanWacho','1235434','0','images/products/onePiece.jpg','2023-02-28','JUANWACHO'),(14,'luciamunoz@gmail.com','827ccb0eea8a706c4c34a16891f84e7b','Lucia','Munoz','0','images/products/IMG_2883.jpg','2023-03-07','luciamunoz');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-07 14:52:18
