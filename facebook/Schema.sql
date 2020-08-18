DROP DATABASE IF EXISTS Facebook;

CREATE DATABASE Facebook;

USE Facebook;

CREATE TABLE Accounts (
  id int NOT NULL AUTO_INCREMENT,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Posts (
  id int NOT NULL AUTO_INCREMENT,
  firstname varchar(50) NOT NULL,
  post varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Accounts (firstname, lastname, email, password)
VALUES ("Paul", "Prokopy", "pprokopy@gmail.com", "159753");

INSERT INTO Posts (firstname, post)
VALUES ("Paul", "Hello World");