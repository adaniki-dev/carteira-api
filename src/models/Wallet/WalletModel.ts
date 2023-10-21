import { PrismaClient, Wallet as PrismaWallet } from "@prisma/client";

const prisma = new PrismaClient();

export class Wallet {
    constructor (private walletData: Partial<PrismaWallet>) {}

    async save(): Promise<PrismaWallet> {
        if(this.walletData.profileId === undefined) {
            throw new Error('Campo "userId" é obrigatório.');
        }
        if(this.walletData.salary === undefined) {
            throw new Error('Campo "name" é obrigatório.');
        }
        if(this.walletData.extra === undefined) {
            throw new Error('Campo "balance" é obrigatório.');
        }
        if(this.walletData.mounth === undefined) {
            throw new Error('Campo "balance" é obrigatório.');
        }
        if(this.walletData.year === undefined) {
            throw new Error('Campo "balance" é obrigatório.');
        }
        if(this.walletData.total === undefined) {
            throw new Error('Campo "total" é obrigatório.');
        }

        try {
            const newWallet = await prisma.wallet.create({
                data: {
                    profileId: this.walletData.profileId,
                    salary: this.walletData.salary,
                    extra: this.walletData.extra,
                    mounth: this.walletData.mounth,
                    year: this.walletData.year,
                    total: this.walletData.total,
                },
            });
            return newWallet;
        } catch (error: any) {
            throw new Error('Erro ao criar carteira: ' + error.message);
        }
    }

    static async getAll(profileId: string): Promise<PrismaWallet[]> {
        try {
            const wallets = await prisma.wallet.findMany({ where: { profileId } });
            return wallets;
        } catch (error: any) {
            throw new Error('Erro ao buscar todas as carteiras: ' + error.message);
        }
    }

    static async get(id: string): Promise<PrismaWallet | null> {
        try {
            const wallet = await prisma.wallet.findUnique({
                where: { id },
            });
            return wallet;
        } catch (error: any) {
            throw new Error('Erro ao buscar carteira: ' + error.message);
        }
    }

}