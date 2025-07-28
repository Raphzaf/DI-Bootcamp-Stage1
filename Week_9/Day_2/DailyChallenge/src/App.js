import React from 'react';
import DatePicker from './features/planner/DatePicker';
import TaskList from './features/planner/TaskList';
import TaskForm from './features/planner/TaskForm';

function App() {
  return (
    <div>
      <h1>🗓️ Daily Planner</h1>
      <DatePicker />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
