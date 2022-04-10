import express from 'express';
import cors from 'cors'
import { Book } from '@fe/types/book'

const book: Book = {
  name: 'Harry Potter',
  pages: 300,
}

const book2: Book = {
  name: 'Lord of the rings',
  pages: 200,
}

const books = [book, book2];

const app = express()
app.use(cors())
const port = 3030

app.get('/books/:id', (req, res) => {
  res.json(books[req.params.id]);
})

app.get('/books', (req, res) => {
  res.json(books);
})

app.post('/books', (req, res) => {
  res.json(books);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})