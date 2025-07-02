import { TodoList } from './todo.js';

const myTodo = new TodoList();

myTodo.addTask('Learn Node.js');
myTodo.addTask('Complete assignments');
myTodo.addTask('Go for a walk');

myTodo.markComplete('Learn Node.js');

console.log('📋 Your Todo List:');
myTodo.listTasks();
