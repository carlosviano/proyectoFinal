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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` VALUES (25,5,'currently watching',NULL,'One piece',10,'tv show'),(26,1,'watched','Feb 25th 23','One Piece',9,'tv show'),(27,1,'currently watching','Feb 26th 23','A Silent Voice: The Movie',NULL,'movie'),(29,1,'currently watching','Feb 26th 23','The Lord of the Rings: The Fellowship of the Ring',10,'movie'),(32,1,'currently watching','Feb 26th 23','Hitoribocchi no Marumaruseikatsu',NULL,'tv show'),(37,1,'currently watching','Feb 26th 23','The D\'Amelio Show',NULL,'tv show');
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

-- Dump completed on 2023-02-27 14:58:27
