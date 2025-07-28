import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from './plannerSlice';

const TaskForm = ({ editMode = false, task = {}, onClose }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editMode) {
      dispatch(editTask({ date: selectedDate, taskId: task.id, updatedTask: { title, description } }));
    } else {
      dispatch(addTask({ date: selectedDate, task: { title, description } }));
    }

    setTitle('');
    setDescription('');
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{editMode ? 'Update' : 'Add Task'}</button>
      {onClose && <button type="button" onClick={onClose}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
