import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Init Middleware

// Init Database
import './dbs/init.mongodb.js';
import { checkOverload } from './helpers/check.connect.js';
checkOverload();
// Init Router
app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Welcome',
  });
});
// Handling error

// app.use(express.urlencoded());

export default app;
