import { Request, Response } from "express";
import { WalletServiceUpdate } from "@src/services/Wallet/WalletUpdate";

export class WalletControllerUpdate {
    static async updateWallet(req: Request, res: Response) {
        const { walletId, salary, year, month, extra} = req.body;

        try {
            const newWallet = await WalletServiceUpdate.updateWallet(walletId, { salary, year, month, extra });
            res.status(201).json(newWallet);
        } catch (error) {
            console.error('Erro ao criar carteira:', error);
            res.status(500).json({ error: 'Erro ao criar carteira' });
        }
    }
}