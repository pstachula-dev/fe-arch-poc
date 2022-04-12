import { BooksProvider } from '../modules/books/components/BooksProvider'
import { Books } from '../modules/books/components/Books'

function BooksPage() {
    return <div>
        <BooksProvider>
          <Books />
        </BooksProvider>
    </div>
}
  
export default BooksPage