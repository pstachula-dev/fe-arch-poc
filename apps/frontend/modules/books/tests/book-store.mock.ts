import { useBookStore } from '../stores/books-store';

export const setupBooksStore = () => useBookStore.setState({
    books: [{ name: "Harry Potter", pages: 1 }]
})