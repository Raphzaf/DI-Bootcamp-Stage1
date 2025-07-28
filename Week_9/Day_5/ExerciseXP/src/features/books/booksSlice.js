import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    { id: 2, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 4, title: 'It', author: 'Stephen King', genre: 'Horror' },
    { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 6, title: 'Neuromancer', author: 'William Gibson', genre: 'Science Fiction' }
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
