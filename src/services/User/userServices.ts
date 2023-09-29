import { User } from '@src/models/User/UserModel';
import { User as PrismaUser } from '@prisma/client';

export class UserService {
  static async createUser(userData: Partial<PrismaUser>): Promise<User> {
    const user = new User(userData);
    await user.save();
    return user;
  }

  static async getAllUsers(): Promise<User[]> {
    try {
      const users = await User.getAll();  
      return users.map((userData) => new User(userData));
    } catch (error: any) {
      throw new Error('Erro ao buscar todos os usuários: ' + error.message);
    }
  }

  static async getUserById(userId: string) {
    try {
      const user = await User.get(userId);
      return user;
    } catch (error: any) {
      throw new Error('Erro ao buscar usuário: ' + error.message);
    }
  }
}
