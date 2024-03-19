import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
app.use(cors());

let PORT = process.env.PORT;
let IRL = process.env.IRL;

// app.use(express.urlencoded());
app.use(express.json());
app.use('/api/v1', router);

mongoose
  .connect(IRL)
  .then(
    console.log('Connected to MongoDB'),
    app.listen(PORT, () => {
      console.log(`Listen on http://localhost:${PORT}/api/v1/books `);
    })
  )
  .catch((err) => console.log(`Error connecting to MongoDB, error: ${err}`));
