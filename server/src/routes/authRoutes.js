import express from 'express';
import { register, login, me } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Rotas públicas
router.post('/register', register);
router.post('/login', login);

// Rota protegida - requer token JWT válido
router.get('/me', authenticateToken, me);

export default router;

