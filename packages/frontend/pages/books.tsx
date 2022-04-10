import { BooksProvider } from '../modules/books/BooksProvider'
import { Books } from '../modules/books/Books'

function BooksPage() {
    return <div>
        <BooksProvider>
          <Books />
        </BooksProvider>
    </div>
}
  
export default BooksPage