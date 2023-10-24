import { PrismaClient, FinancialTransaction as PrismaFinancialTransaction } from "@prisma/client";

const prisma = new PrismaClient();

export class FinancialTransactionModel {
    constructor (private FinancialTransactionData: Partial<PrismaFinancialTransaction>) {}

    async save(): Promise<PrismaFinancialTransaction> {
        if (this.FinancialTransactionData.walletId === undefined) {
            throw new Error('Campo "walletId" é obrigatório.');
        }
        if (this.FinancialTransactionData.name === undefined) {
            throw new Error('Campo "type" é obrigatório.');
        }
        if (this.FinancialTransactionData.amount === undefined) {
            throw new Error('Campo "value" é obrigatório.');
        }
        if (this.FinancialTransactionData.transactionType === undefined) {
            throw new Error('Campo "description" é obrigatório.');
        }
        if (this.FinancialTransactionData.month === undefined) {
            throw new Error('Campo "date" é obrigatório.');
        }
        if (this.FinancialTransactionData.year === undefined) {
            throw new Error('Campo "date" é obrigatório.');
        }        

        try {
            const newFinancialTransaction = await prisma.financialTransaction.create({
                data: {
                    walletId: this.FinancialTransactionData.walletId,
                    name: this.FinancialTransactionData.name,
                    amount: this.FinancialTransactionData.amount,
                    transactionType: this.FinancialTransactionData.transactionType,
                    month: this.FinancialTransactionData.month,
                    year: this.FinancialTransactionData.year,
                },
            });
            return newFinancialTransaction;
        } catch (error: any) {
            throw new Error('Erro ao criar transação financeira: ' + error.message);
        }
    }

    static async get(walletId: string): Promise<PrismaFinancialTransaction[]> {
        try {
            const financialTransactions = await prisma.financialTransaction.findMany({ where: { walletId } });
            return financialTransactions;
        } catch (error: any) {
            throw new Error('Erro ao buscar transações financeiras: ' + error.message);
        }
    }
}