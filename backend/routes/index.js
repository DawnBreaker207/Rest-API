import Router from 'express';
import path from './path.js';

const router = Router();

router.use('/books', path);


export default router;
