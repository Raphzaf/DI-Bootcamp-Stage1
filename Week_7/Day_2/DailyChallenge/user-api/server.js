const express = require('express');
const app = express();
const userRoutes = require('./server/routes/userRoutes');

app.use(express.json());
app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('User API running at http://localhost:3000');
});
