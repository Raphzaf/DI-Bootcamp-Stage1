import React, { useState } from 'react';
import CategorySelector from './features/categories/CategorySelector';
import TaskList from './features/tasks/TaskList';
import { useDispatch } from 'react-redux';
import { addTask } from './features/tasks/tasksSlice';

function App() {
  const [categoryId, setCategoryId] = useState(1);
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (taskTitle.trim()) {
      dispatch(addTask({ title: taskTitle, categoryId }));
      setTaskTitle('');
    }
  };

  return (
    <div>
      <h1>Productivity Tracker</h1>
      <CategorySelector selected={categoryId} onChange={setCategoryId} />
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAdd}>Add Task</button>
      <TaskList categoryId={categoryId} />
    </div>
  );
}

export default App;
