import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from './plannerSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ editMode = false, existingTask = {} }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.planner.selectedDate);

  const [title, setTitle] = useState(existingTask.title || '');
  const [description, setDescription] = useState(existingTask.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editMode) {
      dispatch(editTask({
        date: selectedDate,
        taskId: existingTask.id,
        updatedTask: { title, description }
      }));
    } else {
      dispatch(addTask({
        date: selectedDate,
        task: {
          id: uuidv4(),
          title,
          description
        }
      }));
      setTitle('');
      setDescription('');
    }
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
    </form>
  );
};

export default TaskForm;
