import { FinancialTransactionModel } from "@src/models/FinancialTransaction/FinancialTransactionModel";
import { FinancialTransaction as PrismaFinancialTransaction } from "@prisma/client";

export class FinancialTransactionServiceCreate {
  static async createFinancialTransaction(financialTransactionData: Partial<PrismaFinancialTransaction>) {
    const financialTransaction = new FinancialTransactionModel(financialTransactionData);
    await financialTransaction.save();
    return financialTransaction;
  }
}