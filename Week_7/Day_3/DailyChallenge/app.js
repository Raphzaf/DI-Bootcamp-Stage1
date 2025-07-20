const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;
const FILE = "./users.json";

app.use(express.json());
app.use(express.static(__dirname)); // pour servir les fichiers HTML

// Lire les utilisateurs
function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf-8"));
  } catch {
    return [];
  }
}

// Écrire les utilisateurs
function writeUsers(users) {
  fs.writeFileSync(FILE, JSON.stringify(users, null, 2));
}

// POST /register
app.post("/register", async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const users = readUsers();
  const exists = users.find(u => u.username === username || u.email === email);
  if (exists) return res.status(400).json({ message: "error1" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now().toString(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  writeUsers(users);
  res.status(201).json({ message: "register" });
});

// POST /login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: "error2" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "error2" });

  res.json({ message: "login" });
});

// GET /users
app.get("/users", (req, res) => {
  const users = readUsers().map(u => ({ ...u, password: "hidden" }));
  res.json(users);
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const user = readUsers().find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ ...user, password: "hidden" });
});

// PUT /users/:id
app.put("/users/:id", (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.json(users[index]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
