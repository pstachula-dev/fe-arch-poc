import { BooksProvider } from '../modules/books/components/BooksProvider';
import { Books } from '../modules/books/components/Books';

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
