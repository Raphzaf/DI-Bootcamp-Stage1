const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'Premier post', content: 'Contenu du premier post' },
  { id: 2, title: 'Deuxième post', content: 'Contenu du deuxième post' }
];

// GET all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET one post
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post non trouvé');
  res.json(post);
});

// POST create
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT update
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post non trouvé');
  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});


app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).send('Route non trouvée');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
