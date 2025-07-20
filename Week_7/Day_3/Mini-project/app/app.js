const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const morgan = require("morgan");
const escapeHtml = require("escape-html");

const app = express();
const PORT = 3000;
const FILE_PATH = path.join(__dirname, "tasks.json");

app.use(express.json());
app.use(morgan("dev"));

// Lire les tâches
async function readTasks() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Écrire les tâches
async function writeTasks(tasks) {
  await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2));
}

// GET /tasks
app.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// GET /tasks/:id
app.get("/tasks/:id", async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// POST /tasks
app.post("/tasks", async (req, res, next) => {
  try {
    let { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    // Sanitize inputs
    title = escapeHtml(title);
    description = escapeHtml(description);

    const tasks = await readTasks();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false
    };

    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

// PUT /tasks/:id
app.put("/tasks/:id", async (req, res, next) => {
  try {
    let { title, description, completed } = req.body;
    const tasks = await readTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: "Task not found" });

    if (title !== undefined) title = escapeHtml(title);
    if (description !== undefined) description = escapeHtml(description);

    tasks[index] = {
      ...tasks[index],
      title: title ?? tasks[index].title,
      description: description ?? tasks[index].description,
      completed: completed ?? tasks[index].completed
    };

    await writeTasks(tasks);
    res.json(tasks[index]);
  } catch (err) {
    next(err);
  }
});

// DELETE /tasks/:id
app.delete("/tasks/:id", async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const filtered = tasks.filter(t => t.id !== req.params.id);
    if (filtered.length === tasks.length) return res.status(404).json({ error: "Task not found" });

    await writeTasks(filtered);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// Middleware d'erreur global
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
