import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: new Date().toISOString().split('T')[0],
  tasksByDate: {} // { '2025-07-28': [{ id, title, description }] }
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, task } = action.payload;
      const tasks = state.tasksByDate[date] || [];
      state.tasksByDate[date] = [...tasks, task];
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date] || [];
      state.tasksByDate[date] = tasks.map((t) => t.id === taskId ? { ...t, ...updatedTask } : t);
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter((t) => t.id !== taskId);
    }
  }
});

export const { selectDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
