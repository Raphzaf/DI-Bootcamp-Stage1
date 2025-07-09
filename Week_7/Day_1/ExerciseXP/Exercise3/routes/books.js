const express = require('express');
const router = express.Router();

let books = [];
let id = 1;

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const { title, author } = req.body;
  const book = { id: id++, title, author };
  books.push(book);
  res.status(201).json(book);
});

router.put('/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send('Book not found');
  book.title = req.body.title;
  book.author = req.body.author;
  res.json(book);
});

router.delete('/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
