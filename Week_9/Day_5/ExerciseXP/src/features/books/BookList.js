import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooksByGenre } from './bookSelectors';

const genres = ['All', 'Horror', 'Fantasy', 'Science Fiction'];

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const allBooks = useSelector((state) => state.books.books);
  const filteredBooks = useSelector((state) =>
    selectedGenre === 'All'
      ? allBooks
      : selectBooksByGenre(state, selectedGenre)
  );

  return (
    <div>
      <h2>Book Inventory</h2>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
