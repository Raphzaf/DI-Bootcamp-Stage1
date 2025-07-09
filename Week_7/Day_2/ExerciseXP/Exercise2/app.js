const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/bookRoutes');

app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(5000, () => {
  console.log('Book API running on http://localhost:5000');
});
