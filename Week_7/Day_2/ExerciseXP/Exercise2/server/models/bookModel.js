let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
];

exports.getAll = () => books;

exports.getById = (id) => books.find(book => book.id === Number(id));

exports.create = (data) => {
  const newBook = { id: Date.now(), ...data };
  books.push(newBook);
  return newBook;
};

exports.update = (id, data) => {
  const index = books.findIndex(b => b.id === Number(id));
  if (index === -1) return null;
  books[index] = { ...books[index], ...data };
  return books[index];
};

exports.delete = (id) => {
  const index = books.findIndex(b => b.id === Number(id));
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};
