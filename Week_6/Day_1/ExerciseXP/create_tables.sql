CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL
);
