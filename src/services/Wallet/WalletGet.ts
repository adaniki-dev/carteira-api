import { Wallet } from "@src/models/Wallet/WalletModel";

export class WalletServiceGet {
    static async getWallet(id: string) {
        const wallet = await Wallet.get(id);
        return wallet;
    }
}