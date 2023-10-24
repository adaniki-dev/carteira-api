import { Wallet } from "@src/models/Wallet/WalletModel";
import  { Wallet as PrismaWallet } from "@prisma/client";

export class WalletServiceCreate {
    static async createWallet(walletData: Partial<PrismaWallet>) {
        const wallet = new Wallet(walletData);
        await wallet.save();
        return wallet;
    }
} 

