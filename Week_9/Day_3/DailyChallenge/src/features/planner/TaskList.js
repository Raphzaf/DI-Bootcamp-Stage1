import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from './plannerSlice';
import TaskForm from './TaskForm';

const TaskList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);
  const tasks = useSelector(state => state.planner.tasksByDate[selectedDate] || []);
  const [editingTaskId, setEditingTaskId] = useState(null);

  return (
    <div>
      <h3>Tasks for {selectedDate}</h3>
      {tasks.map(task =>
        editingTaskId === task.id ? (
          <TaskForm
            key={task.id}
            editMode
            task={task}
            onClose={() => setEditingTaskId(null)}
          />
        ) : (
          <div key={task.id} style={{ marginBottom: '10px' }}>
            <strong>{task.title}</strong> - {task.description}
            <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
            <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId: task.id }))}>
              Delete
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default TaskList;
