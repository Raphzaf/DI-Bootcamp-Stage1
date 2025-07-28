import { createSlice } from '@reduxjs/toolkit';

let nextCategoryId = 3;

const initialState = [
  { id: 1, name: 'Work' },
  { id: 2, name: 'Personal' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push({ id: nextCategoryId++, name: action.payload });
    },
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const category = state.find(c => c.id === id);
      if (category) category.name = name;
    },
    deleteCategory: (state, action) => {
      return state.filter(c => c.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
