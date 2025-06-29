CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    date_of_birth DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);
