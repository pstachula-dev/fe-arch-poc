import { useBookStore } from '../stores/books-store';

export const setupBooksStore = (): void =>
  useBookStore.setState({
    books: [{ name: 'Harry Potter', pages: 1 }],
  });
