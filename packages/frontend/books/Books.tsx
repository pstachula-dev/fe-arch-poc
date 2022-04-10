import { useBookStore } from "../utils/stores/books-store"

export const Books = () => {
    const { book, postBook } = useBookStore(); 

    const addNewBook = () => {
        postBook();
    }
          
    
    return <div>
        <h2>Book: {book?.name}</h2>
        <button onClick={addNewBook}>Add new Book</button>
    </div>
}