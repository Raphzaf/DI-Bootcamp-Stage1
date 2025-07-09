const db = require('../config/db');

exports.getAllPosts = () => db.query('SELECT * FROM posts');

exports.getPostById = (id) => db.query('SELECT * FROM posts WHERE id = $1', [id]);

exports.createPost = (title, content) =>
  db.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);

exports.updatePost = (id, title, content) =>
  db.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);

exports.deletePost = (id) => db.query('DELETE FROM posts WHERE id = $1', [id]);
