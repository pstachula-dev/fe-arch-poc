import create from 'zustand';
import { Book } from '@fe/types/book'
import  { getAllBook, postBook } from '../api/models/books'

interface BooksState {
	book?: Book | null;
    books: Book[] | null;
    getPageData: () => void;
    postBook: (data: Book) => void;
};

export const useBookStore = create<BooksState>((set) => ({
	book: null,
    books: null,
    postBook: async (data) => {
        await postBook(data);
    },
    getPageData: async () => {
        // we can get more requests in Promise.all for the page
        const { data } = await getAllBook();
        set({ books: data });
    }
}));