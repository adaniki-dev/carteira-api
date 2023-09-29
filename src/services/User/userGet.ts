import { User } from '@src/models/User/UserModel';
import { PrismaClient, User as PrismaUser } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  static async getUserById(userId: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      return user;
    } catch (error: any) {
      throw new Error('Erro ao buscar usuário: ' + error.message);
    }
  }
}
