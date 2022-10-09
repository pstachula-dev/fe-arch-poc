import create from 'zustand';
import { BookEntity } from '../../../services/types/books.types';

interface BooksState {
  book?: BookEntity;
  books?: BookEntity[];
  setBooks: (books?: BookEntity[]) => void;
}

export const useBookStore = create<BooksState>((set) => ({
  book: undefined,
  books: undefined,
  setBooks: (books?: BookEntity[]): void => {
    set({ books });
  },
}));
