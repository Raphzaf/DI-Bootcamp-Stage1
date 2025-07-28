import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: new Date().toISOString().split('T')[0],
  tasksByDate: {} // { 'YYYY-MM-DD': [{ id, title, description }] }
};

let idCounter = 1;

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, task } = action.payload;
      const newTask = { ...task, id: idCounter++ };
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push(newTask);
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        const index = tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
          tasks[index] = { ...tasks[index], ...updatedTask };
        }
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date]?.filter(t => t.id !== taskId);
    },
  },
});

export const { selectDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
