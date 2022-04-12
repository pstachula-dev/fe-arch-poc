import { useEffect, ReactNode } from "react";
import { useBookStore } from "../../services/stores/books-store";

export const BooksProvider = ({ children }: { children: ReactNode }) => {
    const { getPageData } = useBookStore()
    
    useEffect(() => {
        getPageData();
    }, []);
    
    return <>{children}</>
}