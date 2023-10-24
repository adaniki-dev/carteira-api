import express from 'express';

import { WalletControllerCreate } from '@src/controllers/Wallet/WalletCreate';
import { WalletControllerGet } from '@src/controllers/Wallet/WalletGet';


const router = express.Router();

router.post('/wallet', WalletControllerCreate.createWallet);
router.get('/wallet/:id', WalletControllerGet.getWallet);

export default router;

