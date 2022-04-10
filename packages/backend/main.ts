import express from 'express';
import { Book } from '@fe/types/book'

const book: Book = {
  name: 'Harry Potter',
  pages: 300,
}

const books = [book, book];

const app = express()
const port = 3000

app.get('/book/:id', (req, res) => {
  res.json(books[req.params.id]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})