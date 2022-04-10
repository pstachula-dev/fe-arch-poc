import { useBookStore } from "../utils/stores/books-store"

export const Books = () => {
    const { book } = useBookStore();    
    
    return <div>
        <h2>Book: {book?.name}</h2>
    </div>
}