import { ReactElement } from 'react';
import { useBookStore } from '../stores/books-store';

export const Books = (): ReactElement => {
  const { books, postBook } = useBookStore();

  const addNewBook = (): void => {
    postBook({ name: 'New Book', pages: 123 });
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books?.map((book) => (
          <li key={book.name}>{book.name}</li>
        ))}
      </ul>
      <button type="button" onClick={addNewBook}>
        Add new Book
      </button>
    </div>
  );
};
