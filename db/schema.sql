
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
eaten boolean,
PRIMARY KEY (id)
);

