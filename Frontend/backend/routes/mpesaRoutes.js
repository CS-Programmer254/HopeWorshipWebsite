// mpesaRoutes.js
import express from 'express';
import { initiatePayment, handleMpesaCallback } from '../controllers/mpesaController.js';

const router = express.Router();

// Route to initiate the payment process
router.post('/initiate', initiateStkPush);

// Route to handle the M-Pesa callback
router.post('/callback', handleMpesaCallback);

export default router;
