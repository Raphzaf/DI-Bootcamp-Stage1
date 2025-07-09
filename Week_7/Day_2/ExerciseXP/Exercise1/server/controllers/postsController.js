const Post = require('../models/postModel');

exports.getAll = async (req, res) => {
  const { rows } = await Post.getAllPosts();
  res.json(rows);
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  const { rows } = await Post.getPostById(id);
  if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { title, content } = req.body;
  const { rows } = await Post.createPost(title, content);
  res.status(201).json(rows[0]);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { rows } = await Post.updatePost(id, title, content);
  if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
  res.json(rows[0]);
};

exports.remove = async (req, res) => {
  await Post.deletePost(req.params.id);
  res.status(204).send();
};
