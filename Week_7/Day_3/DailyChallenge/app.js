const express = require("express");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const escapeHtml = require("escape-html");
const path = require("path");

const app = express();
const PORT = 3000;
const FILE = path.join(__dirname, "users.json");

app.use(express.json());
app.use(express.static(__dirname));

// Lecture fichier
async function readUsers() {
  try {
    const data = await fs.readFile(FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Écriture fichier
async function writeUsers(users) {
  await fs.writeFile(FILE, JSON.stringify(users, null, 2));
}

// POST /register
app.post("/register", async (req, res) => {
  try {
    let { name, lastName, email, username, password } = req.body;
    if (![name, lastName, email, username, password].every(Boolean)) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Sanitize
    name = escapeHtml(name);
    lastName = escapeHtml(lastName);
    email = escapeHtml(email);
    username = escapeHtml(username);

    const users = await readUsers();
    if (users.some(u => u.username === username || u.email === email)) {
      return res.status(400).json({ message: "error1", detail: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: uuidv4(),
      name,
      lastName,
      email,
      username,
      password: hashedPassword
    };

    users.push(newUser);
    await writeUsers(users);
    res.status(201).json({ message: "register" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: "Missing username or password" });

    const users = await readUsers();
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ message: "error2", detail: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "error2", detail: "Incorrect password" });

    res.json({ message: "login" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /users
app.get("/users", async (req, res) => {
  const users = await readUsers();
  res.json(users.map(u => ({ ...u, password: "hidden" })));
});

// GET /users/:id
app.get("/users/:id", async (req, res) => {
  const users = await readUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ ...user, password: "hidden" });
});

// PUT /users/:id
app.put("/users/:id", async (req, res) => {
  const users = await readUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...users[index], ...req.body };
  await writeUsers(users);
  res.json(users[index]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running: http://localhost:${PORT}`);
});
