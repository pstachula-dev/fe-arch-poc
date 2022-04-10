import create from 'zustand';
import { Book } from '@fe/types/book'
import  { getAllBook, postBook } from '../api/models/books'

interface BooksState {
	book?: Book | null;
    books: Book[] | null;
    getPageData: () => void;
    postBook: () => void;
};

export const useBookStore = create<BooksState>((set) => ({
	book: null,
    books: null,
    postBook: async () => {
        await postBook({ name: 'New Book', pages: 123 });
    },
    getPageData: async () => {
        const { data } = await getAllBook();
        set({ books: data });
    }
}));