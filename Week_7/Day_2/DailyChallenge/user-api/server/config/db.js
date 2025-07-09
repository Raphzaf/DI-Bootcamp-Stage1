const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'youruser',
    password: 'yourpassword',
    database: 'yourdb',
  },
});

module.exports = db;
