import { User } from '@src/models/User/UserModel';
import { User as PrismaUser } from '@prisma/client';

export class UserCreateService {
  static async execute(userData: Partial<PrismaUser>): Promise<User> {
    const user = new User(userData);
    await user.save();
    return user;
  }
}
