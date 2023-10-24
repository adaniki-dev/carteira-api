import express from 'express';

import { FinancialTransactionControllerCreate } from '@src/controllers/FinancialTransaction/FinancialTransactionCreate';
import { FinancialTransactionControllerGet } from '@src/controllers/FinancialTransaction/FinancialTransactionGet';


const router = express.Router();

router.post('/financialTransaction', FinancialTransactionControllerCreate.createFinancialTransaction);
router.get('/financialTransaction/:id', FinancialTransactionControllerGet.getFinancialTransaction);

export default router;