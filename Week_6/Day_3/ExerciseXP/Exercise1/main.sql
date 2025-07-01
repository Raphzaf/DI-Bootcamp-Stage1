SELECT * FROM language;

SELECT f.title, f.description, l.name AS language
FROM film f
JOIN language l ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;


CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO new_film (name) VALUES
('The Matrix Reloaded'),
('Inception'),
('The Grand Budapest Hotel');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(100) NOT NULL,
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Awesome movie', 9, 'Really enjoyed the action scenes!'),
(2, 2, 'Mind-blowing', 10, 'Incredible story and visuals.');

DELETE FROM new_film WHERE id = 1;
