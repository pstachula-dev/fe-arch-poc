import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ReactElement } from 'react';

import { getAllBooks, postBook } from '../../../services/api/models/books';
import { useGetBooksConfig } from '../stores/books-store';

export const Books = (): ReactElement => {
  const queryClient = useQueryClient();
  const booksConfig = useGetBooksConfig();

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['getBooks'],
    queryFn: getAllBooks,
  });

  const bookMutation = useMutation({
    mutationFn: postBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getBooks'] }),
  });

  const onClickAddBook = (): void => {
    bookMutation.mutate({ name: 'New book', pages: 1 });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  return (
    <div>
      <h2>Name: {booksConfig?.libraryName}</h2>
      <button type="button" onClick={onClickAddBook}>
        Add new book
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.name}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};
