import { createSelector } from '@reduxjs/toolkit';

export const selectBooks = (state) => state.books.books;

export const selectGenre = (_, genre) => genre;

export const selectBooksByGenre = createSelector(
  [selectBooks, selectGenre],
  (books, genre) => books.filter(book => book.genre === genre)
);

export const selectHorrorBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Science Fiction')
);
