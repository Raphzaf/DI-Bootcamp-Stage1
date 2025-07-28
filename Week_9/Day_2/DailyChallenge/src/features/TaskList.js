import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from './plannerSlice';
import TaskForm from './TaskForm';

const TaskList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.planner.selectedDate);
  const tasks = useSelector((state) => state.planner.tasksByDate[selectedDate] || []);

  return (
    <div>
      <h3>Tasks for {selectedDate}</h3>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: 10 }}>
          <strong>{task.title}</strong>
          <p>{task.description}</p>
          <TaskForm editMode existingTask={task} />
          <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId: task.id }))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
