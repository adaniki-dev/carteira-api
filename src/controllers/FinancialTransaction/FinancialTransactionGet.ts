import { Request, Response } from "express";
import { FinancialTransactionServiceGet } from "@src/services/FinancialTransaction/FinancialTransactionGet";

export class FinancialTransactionControllerGet {
    static async getFinancialTransaction(req: Request, res: Response) {
        const { WalletId } = req.body;
        try {
            const newFinancialTransaction = await FinancialTransactionServiceGet.getFinancialTransaction(WalletId);
            res.status(201).json(newFinancialTransaction);
        } catch(error) {
            console.error('Erro ao criar transação financeira:', error);
            res.status(500).json({ error: 'Erro ao criar transação financeira' });
        }
    }

}