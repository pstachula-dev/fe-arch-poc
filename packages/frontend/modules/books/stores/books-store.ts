import create from 'zustand';
import { Book } from '../../../services/types/books.types'
import  { postBook } from '../../../services/api/models/books'

interface BooksState {
	book?: Book;
    books?: Book[];
    postBook: (data: Book) => void;
    setBooks: (books?: Book[]) => void;
};

export const useBookStore = create<BooksState>((set) => ({
	book: undefined,
    books: undefined,
    postBook: async (data) => {
        // await postBook(data);
    },
    setBooks: (books) => {
        set({ books });
    },
}));