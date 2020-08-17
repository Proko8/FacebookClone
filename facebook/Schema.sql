DROP DATABASE IF EXISTS TabsDB;

CREATE DATABASE TabsDB;

USE TabsDB;

CREATE TABLE Accounts (
  id int NOT NULL AUTO_INCREMENT,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Accounts (firstname, lastname, email, password)
VALUES ("Paul", "Prokopy", "pprokopy@gmail.com", "159753");