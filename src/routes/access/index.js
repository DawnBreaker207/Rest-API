import express from 'express';
import accessController from '../../controllers/access.controller.js';
import { asyncHandler } from '../../auth/checkAuth.js';
const router = express.Router();

// Sign up
router.post('/shop/signup', asyncHandler(accessController.signUp));
export default router;
