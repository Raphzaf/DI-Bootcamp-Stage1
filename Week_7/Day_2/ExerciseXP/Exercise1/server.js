const express = require('express');
const app = express();
const postRoutes = require('./server/routes/postRoutes');

app.use(express.json());
app.use('/posts', postRoutes);

// Middleware de gestion des erreurs
app.use((req, res) => res.status(404).send('Route not found'));
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

app.listen(3000, () => {
  console.log('Blog API running on http://localhost:3000');
});
