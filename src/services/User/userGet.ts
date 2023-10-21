import { User } from '@src/models/User/UserModel';

export class UserServiceGet {
  static async getUserById(userId: string) {
    try {
      const user = await User.get(userId);
      return user;
    } catch (error: any) {
      throw new Error('Erro ao buscar usuário: ' + error.message);
    }
  }
}
