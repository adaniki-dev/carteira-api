import { User } from '@src/models/User/UserModel';

export class UserGetAllService {
  static async execute(): Promise<User[]> {
    try {
      const users = await User.getAll();  
      return users.map((userData) => new User(userData));
    } catch (error: any) {
      throw new Error('Erro ao buscar todos os usuários: ' + error.message);
    }
  }

}
