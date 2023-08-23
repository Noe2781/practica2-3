CREATE DATABASE GruposMusicalesRock;
USE GruposMusicalesRock;

CREATE TABLE GruposRock (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Genero VARCHAR(100),
    AnioFormacion INT,
    PaisOrigen VARCHAR(100)
);


INSERT INTO GruposRock (Nombre, Genero, AnioFormacion, PaisOrigen)
VALUES
    ('Led Zeppelin', 'Rock clásico', 1968, 'Reino Unido'),
    ('Queen', 'Rock', 1970, 'Reino Unido'),
    ('The Rolling Stones', 'Rock', 1962, 'Reino Unido'),
    ('Nirvana', 'Grunge', 1987, 'Estados Unidos');


SELECT * FROM GruposRock;

SELECT * FROM GruposRock WHERE Nombre = 'Led Zeppelin';


-- Actualizar el registro de Led Zeppelin
UPDATE GruposRock
SET Genero = 'Rock clásico', AnioFormacion = 1969
WHERE Nombre = 'Led Zeppelin';

-- Actualizar el registro de Queen
UPDATE GruposRock
SET Genero = 'Rock', AnioFormacion = 1971
WHERE Nombre = 'Queen';


-- Eliminar los registros no actualizados previamente
DELETE FROM GruposRock
WHERE Nombre NOT IN ('Led Zeppelin');

