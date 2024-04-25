import express from 'express';
import route from './access/index.js';
const router = express.Router();

router.use('/v1/api', route);
// router.get('/', (req, res, next) => {
//   return res.status(200).json({
//     message: 'Welcome',
//   });
// });
export default router;
