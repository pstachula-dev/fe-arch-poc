import create from 'zustand';
import { Book } from '@fe/types/book'
import  { getBook } from '../api/models/books'

interface BooksState {
	book?: Book | null;
    getPageData: () => void;
};

export const useBookStore = create<BooksState>((set) => ({
	book: null,
    getPageData: async () => {
        const { data } = await getBook('1');
        set({ book: data });
    }
}));