import { useBookStore } from "../../services/stores/books-store"

export const Books = () => {
    const { books, postBook } = useBookStore(); 

    const addNewBook = () => {
        postBook({ name: 'New Book', pages: 123 });
    }          
    
    return <div>
        <h2>Books</h2>
        <ul>
            {books?.map(book => <li key={book.name}>{book.name}</li>)}
        </ul>
        <button onClick={addNewBook}>Add new Book</button>
    </div>
}