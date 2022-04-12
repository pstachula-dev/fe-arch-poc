import { useEffect, ReactNode } from "react";
import useSWR from "swr";
import { getAllBook } from "../../../services/api/models/books";
import { useBookStore } from "../stores/books-store";

export const BooksProvider = ({ children }: { children: ReactNode }) => {
    const { setBooks } = useBookStore()
    const { data: books } = useSWR('get-books', getAllBook);
    
    useEffect(() => {
        setBooks(books?.data);
    }, [books, setBooks]);
    
    return <>{children}</>
}