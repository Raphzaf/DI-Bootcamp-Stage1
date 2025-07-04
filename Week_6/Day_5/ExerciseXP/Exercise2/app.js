const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'Le Petit Prince', author: 'Saint-Exupéry', publishedYear: 1943 }
];

// READ all
app.get('/api/books', (req, res) => res.json(books));

// READ one
app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  book ? res.status(200).json(book) : res.status(404).json({ message: 'Book not found' });
});

// CREATE
app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => console.log(`Book API → http://localhost:${PORT}`));
