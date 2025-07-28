import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from './taskSelectors';
import { toggleTask, deleteTask } from './tasksSlice';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));

  const handleToggle = useCallback((id) => dispatch(toggleTask(id)), [dispatch]);
  const handleDelete = useCallback((id) => dispatch(deleteTask(id)), [dispatch]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            {task.title}
          </label>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
