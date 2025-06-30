CREATE TABLE FirstTab (
    id INTEGER,
    name VARCHAR(10)
);

CREATE TABLE SecondTab (
    id INTEGER
);

INSERT INTO FirstTab (id, name) VALUES
(5, 'Pawan'),
(6, 'Sharlee'),
(7, 'Krish'),
(NULL, 'Avtaar');

INSERT INTO SecondTab (id) VALUES
(5),
(NULL);


SELECT * FROM FirstTab;
SELECT * FROM SecondTab;

SELECT COUNT(*) AS Q1_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NULL
);

SELECT COUNT(*) AS Q2_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id = 5
);

SELECT COUNT(*) AS Q3_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab
);

SELECT COUNT(*) AS Q4_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NOT NULL
);
