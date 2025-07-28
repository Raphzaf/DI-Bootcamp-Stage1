import React from 'react';
import DatePicker from './features/planner/DatePicker';
import TaskForm from './features/planner/TaskForm';
import TaskList from './features/planner/TaskList';

function App() {
  return (
    <div>
      <h1>Daily Planner</h1>
      <DatePicker />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
