import { Books } from '../modules/books/components/Books';
import { BooksProvider } from '../modules/books/components/BooksProvider';

const BooksPage = (): JSX.Element => {
  return (
    <div>
      <BooksProvider>
        <Books />
      </BooksProvider>
    </div>
  );
};

export default BooksPage;
