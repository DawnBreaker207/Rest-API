import express from 'express';
import route from './access/index.js';
import { apiKey, permission } from '../auth/checkAuth.js';
const router = express.Router();
// check apiKey
router.use(apiKey);
// check permission
router.use(permission('0000'));
router.use('/v1/api', route);
// router.get('/', (req, res, next) => {
//   return res.status(200).json({
//     message: 'Welcome',
//   });
// });
export default router;
