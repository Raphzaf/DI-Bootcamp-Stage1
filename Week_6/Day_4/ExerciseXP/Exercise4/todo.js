export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markComplete(task) {
    const found = this.tasks.find(t => t.task === task);
    if (found) {
      found.completed = true;
    }
  }

  listTasks() {
    this.tasks.forEach(t => {
      const status = t.completed ? '✅' : '❌';
      console.log(`${status} ${t.task}`);
    });
  }
}
