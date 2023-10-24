import { Wallet } from "@src/models/Wallet/WalletModel";
import { Wallet as PrismaWallet } from "@prisma/client";

export class WalletServiceUpdate {
  static async updateWallet(id: string, walletData: Partial<PrismaWallet>) {
    const wallet = await Wallet.update(id, walletData);
    return wallet;
  }
}