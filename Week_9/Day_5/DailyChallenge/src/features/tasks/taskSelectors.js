import { createSelector } from '@reduxjs/toolkit';

export const selectAllTasks = (state) => state.tasks;

export const selectTasksByCategory = createSelector(
  [selectAllTasks, (_, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [selectAllTasks],
  (tasks) => tasks.filter(task => task.completed).length
);
