import create from 'zustand';
import { Book } from '../api/types/books.types';
import  { getAllBook, postBook } from '../api/models/books'

interface BooksState {
	book?: Book;
    books?: Book[];
    getPageData: () => void;
    postBook: (data: Book) => void;
};

export const useBookStore = create<BooksState>((set) => ({
	book: undefined,
    books: undefined,
    postBook: async (data) => {
        await postBook(data);
    },
    getPageData: async () => {
        // we can get more requests in Promise.all for the page
        const { data } = await getAllBook();
        set({ books: data });
    }
}));