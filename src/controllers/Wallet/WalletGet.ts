import { Request, Response } from 'express';
import { WalletServiceGet } from '@src/services/Wallet/WalletGet';

export class WalletControllerGet {
    static async getWallet(req: Request, res: Response) {
        const { walletId } = req.body;
    
        try {
        const newWallet = await WalletServiceGet.getWallet( walletId );
        res.status(201).json(newWallet);
        } catch (error) {
        console.error('Erro ao criar carteira:', error);
        res.status(500).json({ error: 'Erro ao criar carteira' });
        }
    }
}