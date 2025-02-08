DROP TABLE IF EXISTS `apartments`;
CREATE TABLE `apartments` (
                              `id` int NOT NULL AUTO_INCREMENT,
                              `unit_name` varchar(255) NOT NULL,
                              `unit_number` int NOT NULL,
                              `project` varchar(255) NOT NULL,
                              `location` varchar(255) NOT NULL,
                              `bedrooms` int NOT NULL,
                              `bathrooms` int NOT NULL,
                              `price` int NOT NULL,
                              PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES `apartments` WRITE;
INSERT INTO `apartments` VALUES
                             (1,'CR.F07.F08',25004185,'Next Point','Mokattam',2,2,1350000),
                             (2,'A585',65478,'Palm Hills','6th October',3,2,2000000),
                             (3,'OLS452',556,'Zed','El Sheikh Zayed',4,1,5000000),
                             (4,'SKI5',968340,'Badya','5th Settelment',5,1,5800000),
                             (5,'Luxury Apartment 1',207,'Skyline Towers','New York',3,2,2500),
                             (6,'Luxury Apartment 2',207,'Skyline Towers','New York',3,2,2500),
                             (7,'Luxury Apartment 3',207,'Skyline Towers','New York',3,2,2500),
                             (8,'Luxury Apartment 4',207,'Skyline Towers','New York',3,2,2500),
                             (9,'Howard Dillon',955,'Maiores possimus qu','Architecto rerum nos',5,5,333),
                             (10,'Yolanda Rollins',567,'Nesciunt consequatu','Dolores ad tempora v',1,1,823),
                             (11,'Dawn Christian',953,'Quam minus sint des','Molestiae est ut fug',1,4,787);
UNLOCK TABLES;
