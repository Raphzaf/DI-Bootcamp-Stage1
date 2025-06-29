-- CREATE TABLE
CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    date_of_birth DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);

-- INSERT DATA
INSERT INTO actors (first_name, last_name, date_of_birth, number_oscars)
VALUES 
('Meryl', 'Streep', '1949-06-22', 12),
('George', 'Clooney', '1961-05-06', 2),
('Gal', 'Gadot', '1985-04-30', 2),
('Brad', 'Pitt', '1963-12-18', 2);

-- QUERIES
SELECT * FROM actors;

SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, date_of_birth, number_oscars)
VALUES (NULL, NULL, NULL, NULL);
