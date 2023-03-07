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
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list` (
  `idlist` int NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `state` enum('currently watching','watched','plan to watch','dropped') NOT NULL DEFAULT 'currently watching',
  `reg_date` varchar(128) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `type` enum('tv show','movie') NOT NULL,
  PRIMARY KEY (`idlist`),
  UNIQUE KEY `idList_UNIQUE` (`idlist`),
  KEY `listuser_fk_idx` (`user`),
  CONSTRAINT `listuser_fk` FOREIGN KEY (`user`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` VALUES (25,5,'currently watching',NULL,'One piece',10,'tv show'),(39,10,'watched','Feb 28th 23','Chainsaw Man',9,'tv show'),(40,10,'currently watching','Feb 28th 23','Josee, the Tiger and the Fish',NULL,'movie'),(41,10,'currently watching','Feb 28th 23','Interstellar',NULL,'movie'),(42,10,'watched','Feb 28th 23','The Last Days of the USSR',10,'movie'),(43,1,'watched','Mar 1st 23','Normal People',10,'tv show'),(44,1,'watched','Mar 2nd 23','One Piece',8,'tv show');
/*!40000 ALTER TABLE `list` ENABLE KEYS */;
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
