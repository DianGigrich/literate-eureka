DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  review text,
  movie_id INT,
  Foreign Key (movie_id) REFERENCES movies(id)
  ON DELETE CASCADE
);