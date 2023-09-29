import { User } from '@src/models/User/UserModel';
import { PrismaClient, User as PrismaUser } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  static async getAllUsers(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany();
      return users.map((userData) => new User(userData));
    } catch (error: any) {
      throw new Error('Erro ao buscar todos os usuários: ' + error.message);
    }
  }
}
