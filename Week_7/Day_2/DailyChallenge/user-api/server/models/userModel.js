const db = require('../config/db');

exports.createUser = async (userData, hashedPassword) => {
  return db.transaction(async trx => {
    const [user] = await trx('users')
      .insert(userData)
      .returning('*');
    
    await trx('hashpwd').insert({
      username: user.username,
      password: hashedPassword
    });

    return user;
  });
};

exports.getAllUsers = () => db('users').select('*');

exports.getUserById = (id) => db('users').where({ id }).first();

exports.getHashByUsername = (username) =>
  db('hashpwd').where({ username }).first();

exports.getUserByUsername = (username) =>
  db('users').where({ username }).first();

exports.updateUser = (id, data) =>
  db('users').where({ id }).update(data).returning('*');
