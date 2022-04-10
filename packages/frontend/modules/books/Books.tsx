import { Book } from "../../utils/types/books.types";
import { memo, useState } from "react";
import { useBookStore } from "../../utils/stores/books-store"

const BookChild = ({ books }: { books?: Book[]}) => {
    return <div>Book child</div>
};

export const Books = () => {
    const [_state, setState] = useState(0);
    const { books, postBook } = useBookStore(); 

    const addNewBook = () => {
        postBook({ name: 'New Book', pages: 123 });
        setState(Math.random());
    }          
    
    return <div>
        <h2>Books</h2>
        <ul>
            {books?.map(book => <li key={book.name}>{book.name}</li>)}
        </ul>
        <button onClick={addNewBook}>Add new Book</button>
        <BookChild books={books} />
    </div>
}