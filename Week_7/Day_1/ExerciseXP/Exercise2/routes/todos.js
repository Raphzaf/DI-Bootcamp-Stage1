const express = require('express');
const router = express.Router();

let todos = [];
let id = 1;

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: id++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).send('Todo not found');
  todo.title = req.body.title;
  res.json(todo);
});

router.delete('/:id', (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
