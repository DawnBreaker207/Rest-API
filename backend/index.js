import express from 'express';
import { mongoose } from 'mongoose';
import dotenv from 'dotenv';
import { bookModel } from './model/model.js';
dotenv.config();

const app = express();

let PORT = process.env.PORT;
let IRL = process.env.IRL;

app.get('/', (req, res) => {
  res.send('This is home page');
});
app.get('/books', async function (req, res) {
  try {
    const books = await bookModel.find({});
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(`Error 500`);
  }
});

app.use((req, res) => {
  res.status(404);
});

app.use((req, res) => {
  res.status(500);
});

mongoose
  .connect(IRL)
  .then(
    console.log('Connected to MongoDB'),
    app.listen(PORT, () => {
      console.log(`Listen on port ${PORT}`);
    })
  )
  .catch((err) => console.log(`Error connecting to MongoDB, error: ${err}`));
