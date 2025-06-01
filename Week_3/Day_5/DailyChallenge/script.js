const tasks = [];
let taskId = 0;

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.querySelector(".listTasks");
const clearBtn = document.querySelector(".clearAll");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskObj = {
    task_id: taskId++,
    text: taskText,
    done: false,
  };
  tasks.push(taskObj);
  renderTask(taskObj);
  input.value = "";
}

function renderTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.setAttribute("data-task-id", task.task_id);

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fas fa-times";
  deleteBtn.style.color = "red";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.addEventListener("click", () => deleteTask(task.task_id));

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => doneTask(task.task_id));

  const label = document.createElement("label");
  label.textContent = task.text;

  taskDiv.appendChild(deleteBtn);
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskList.appendChild(taskDiv);
}

function doneTask(id) {
  const task = tasks.find(t => t.task_id === id);
  if (!task) return;

  task.done = !task.done;

  const taskDiv = document.querySelector(`[data-task-id="${id}"]`);
  if (task.done) {
    taskDiv.classList.add("done");
  } else {
    taskDiv.classList.remove("done");
  }
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.task_id === id);
  if (index > -1) {
    tasks.splice(index, 1);
    const taskDiv = document.querySelector(`[data-task-id="${id}"]`);
    if (taskDiv) taskDiv.remove();
  }
}

clearBtn.addEventListener("click", () => {
  tasks.length = 0;
  taskList.innerHTML = "";
});
