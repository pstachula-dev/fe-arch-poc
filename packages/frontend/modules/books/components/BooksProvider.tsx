import { useEffect, ReactNode } from "react";
import { useBookStore } from "../stores/books-store";

export const BooksProvider = ({ children }: { children: ReactNode }) => {
    const { getPageData } = useBookStore()
    
    useEffect(() => {
        getPageData();
    }, []);
    
    return <>{children}</>
}