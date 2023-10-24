import { Request, Response } from 'express';
import { WalletServiceCreate } from '@src/services/Wallet/WalletCreate';

export class WalletControllerCreate {
    static async createWallet(req: Request, res: Response) {
        const { walletId } = req.body;
    
        try {
        const newWallet = await WalletServiceCreate.createWallet( walletId );
        res.status(201).json(newWallet);
        } catch (error) {
        console.error('Erro ao criar carteira:', error);
        res.status(500).json({ error: 'Erro ao criar carteira' });
        }
    }
    
    }