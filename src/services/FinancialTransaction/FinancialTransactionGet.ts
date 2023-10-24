import { FinancialTransactionModel } from "@src/models/FinancialTransaction/FinancialTransactionModel";


export class FinancialTransactionServiceGet {
  static async getFinancialTransaction(id: string) {

    const financialTransaction = await FinancialTransactionModel.get(id);
    return financialTransaction;
  }
}
