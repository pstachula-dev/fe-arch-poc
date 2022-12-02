import { useBookStore } from '../stores/books-store';

export const setupBooksStore = (): void => {
  useBookStore.setState({
    bookConfig: { libraryName: 'new' },
  });
};
