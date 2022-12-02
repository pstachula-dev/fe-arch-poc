import { BookDto } from '@app/types';
import cors from 'cors';
import express from 'express';

const book: BookDto = {
  name: 'Harry Potter',
  pages: 300,
};

const book2: BookDto = {
  name: 'Lord of the rings',
  pages: 200,
};

const books = [book, book2];
const app = express();
app.use(cors());
const port = 3030;

app.get('/books/:id', (req, res) => {
  res.json(books[Number(req.params.id)]);
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  books.push(book2);
  res.json(books);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
