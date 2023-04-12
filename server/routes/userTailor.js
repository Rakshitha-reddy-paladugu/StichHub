import express from 'express';
import { signin, register } from '../controllers/userTailor.js'

const router = express.Router();

router.post('/signin', signin);
router.post('/register', register);

export default router;