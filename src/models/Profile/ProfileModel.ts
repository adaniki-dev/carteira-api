import { PrismaClient, Profile as PrismaProfile } from '@prisma/client';

const prisma = new PrismaClient();

export class Profile {
  constructor(private ProfileData: Partial<PrismaProfile>) {}

  async save(): Promise<PrismaProfile> {
    if (this.ProfileData.userId === undefined) {
      throw new Error('Campo "userId" é obrigatório.');
    }
    if(this.ProfileData.name === undefined) {
        throw new Error('Campo "name" é obrigatório.');
    }

    try {
      const newProfile = await prisma.profile.create({
        data: {
          userId: this.ProfileData.userId,
          name: this.ProfileData.name,
            
        },
      });
      return newProfile;
    } catch (error: any) {
      throw new Error('Erro ao criar perfil: ' + error.message);
    }
  }

    static async getAll(userId: string): Promise<PrismaProfile[]> {
        try {
        const profiles = await prisma.profile.findMany({ where: { userId } });
        return profiles;
        } catch (error: any) {
        throw new Error('Erro ao buscar todos os perfis: ' + error.message);
        }
    }

    static async get(id: string): Promise<PrismaProfile | null> {
        try {
        const profile = await prisma.profile.findUnique({
            where: { id },
        });
        return profile;
        } catch (error: any) {
        throw new Error('Erro ao buscar perfil: ' + error.message);
        }
    }
}
