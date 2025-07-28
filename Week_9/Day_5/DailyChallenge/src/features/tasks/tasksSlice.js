import { createSlice } from '@reduxjs/toolkit';

let nextTaskId = 1;

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { title, categoryId } = action.payload;
      state.push({ id: nextTaskId++, title, completed: false, categoryId });
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) task.title = title;
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
