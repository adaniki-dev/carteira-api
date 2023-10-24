import { PrismaClient, User as PrismaUser } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export class User {
  constructor(private userData: Partial<PrismaUser>) {}

  async save(): Promise<PrismaUser> {   
    if (this.userData.username === undefined) {
      throw new Error('Campo "username" é obrigatório.');
    }
    if(this.userData.email === undefined) {
        throw new Error('Campo "email" é obrigatório.');
    }
    if(this.userData.password === undefined) {
        throw new Error('Campo "password" é obrigatório.');
    }
    if(this.userData.name === undefined) {
        throw new Error('Campo "name" é obrigatório.');
    }
    if(this.userData.lastName === undefined) {
        throw new Error('Campo "lastName" é obrigatório.');
    }
    if(this.userData.birthDate === undefined) {
        throw new Error('Campo "birthDate" é obrigatório.');
    }

    const hashedPassword = await bcrypt.hash(this.userData.password, 10);

    try {
      const newUser = await prisma.user.create({
        data: {
          username: this.userData.username,
          email: this.userData.email,
          password: hashedPassword,
          name: this.userData.name,
          lastName: this.userData.lastName,
          birthDate: this.userData.birthDate,
          googleId: this.userData.googleId,
        },
      });
      return newUser;
    } catch (error: any) {
      throw new Error('Erro ao criar usuário: ' + error.message);
    }

  }

  static async authenticate(email: string, password: string): Promise<any> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return null;
    }

    return user;
  }

  static async generateAccessToken(user: any): Promise<string> {
    return jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '1h' });
  }

  static async get(id: string): Promise<PrismaUser | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      return user;
    } catch (error: any) {
      throw new Error('Erro ao buscar usuário: ' + error.message);
    }
  }

}
