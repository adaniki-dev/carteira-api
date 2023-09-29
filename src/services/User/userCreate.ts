import { User } from '@src/models/User/UserModel';
import { PrismaClient, User as PrismaUser } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  static async createUser(userData: Partial<PrismaUser>): Promise<User> {
    const user = new User(userData);
    await user.save();
    return user;
  }

  static async getAllUsers(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany();
      return users.map((userData) => new User(userData));
    } catch (error: any) {
      throw new Error('Erro ao buscar todos os usuários: ' + error.message);
    }
  }

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
