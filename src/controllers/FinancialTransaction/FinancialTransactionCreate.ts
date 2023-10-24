import { Request, Response } from "express";
import { FinancialTransactionServiceCreate } from "@src/services/FinancialTransaction/FinancialTransactionCreate";

export class FinancialTransactionControllerCreate {
    static async createFinancialTransaction(req: Request, res: Response) {
        const { walletId, name, amount, transactionType, month, year } = req.body;

        try {
            const newFinancialTransaction = await FinancialTransactionServiceCreate.createFinancialTransaction({ walletId, name, amount, transactionType, month, year });
            res.status(201).json(newFinancialTransaction);
        } catch (error) {
            console.error('Erro ao criar transação financeira:', error);
            res.status(500).json({ error: 'Erro ao criar transação financeira' });
        }
    }
}