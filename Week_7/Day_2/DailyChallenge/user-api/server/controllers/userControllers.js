const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.register = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.createUser({ email, username, first_name, last_name }, hashed);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'User registration failed', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userHash = await User.getHashByUsername(username);
    if (!userHash) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, userHash.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const user = await User.getUserByUsername(username);
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};

exports.getAll = async (req, res) => {
  const users = await User.getAllUsers();
  res.json(users);
};

exports.getOne = async (req, res) => {
  const user = await User.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
};

exports.update = async (req, res) => {
  try {
    const updated = await User.updateUser(req.params.id, req.body);
    updated.length === 0
      ? res.status(404).json({ error: 'User not found' })
      : res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: 'Update failed', details: err.message });
  }
};
