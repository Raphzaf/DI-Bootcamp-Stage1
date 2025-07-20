const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
const FILE_PATH = "./tasks.json";

app.use(express.json());

// Lire les tâches
function readTasks() {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Écrire les tâches
function writeTasks(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

// GET /tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id
app.get("/tasks/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// POST /tasks
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  const tasks = readTasks();
  const newTask = {
    id: Date.now().toString(),
    title,
    description,
    completed: false
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
app.put("/tasks/:id", (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  tasks[index] = {
    ...tasks[index],
    title: title ?? tasks[index].title,
    description: description ?? tasks[index].description,
    completed: completed ?? tasks[index].completed
  };
  writeTasks(tasks);
  res.json(tasks[index]);
});

// DELETE /tasks/:id
app.delete("/tasks/:id", (req, res) => {
  const tasks = readTasks();
  const filtered = tasks.filter(t => t.id !== req.params.id);
  if (filtered.length === tasks.length) return res.status(404).json({ error: "Task not found" });

  writeTasks(filtered);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
