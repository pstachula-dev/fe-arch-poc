import { Book } from "@fe/types/book";
import { memo, useState } from "react";
import { useBookStore } from "../../utils/stores/books-store"

const BookChild = ({ books }: { books?: Book[]}) => {
    console.log('render child', books);
    return <div>Book child</div>
};

const BookMemo = memo(BookChild);

export const Books = () => {
    const [state, setState] = useState(0);
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
        <BookMemo books={books} />
    </div>
}