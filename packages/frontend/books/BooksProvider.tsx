import { useEffect, ReactNode } from "react";
import { useBookStore } from "../utils/stores/books-store";

export const BooksProvider = ({ children }: { children: ReactNode }) => {
    const { getPageData } = useBookStore()
    
    useEffect(() => {
        getPageData();
    }, [getPageData]);
    
    return <>{children}</>
}