const Book = require('../models/bookModel');

exports.getAll = (req, res) => res.json(Book.getAll());

exports.getOne = (req, res) => {
  const book = Book.getById(req.params.bookId);
  book ? res.json(book) : res.status(404).json({ message: 'Book not found' });
};

exports.create = (req, res) => res.status(201).json(Book.create(req.body));

exports.update = (req, res) => {
  const updated = Book.update(req.params.bookId, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: 'Book not found' });
};

exports.remove = (req, res) => {
  const deleted = Book.delete(req.params.bookId);
  deleted ? res.status(204).send() : res.status(404).json({ message: 'Book not found' });
};
