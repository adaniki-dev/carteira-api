import { PrismaClient, User as PrismaUser } from '@prisma/client';

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

    try {
      const newUser = await prisma.user.create({
        data: {
          username: this.userData.username,
          email: this.userData.email,
          password: this.userData.password,
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
  
  static async getAll(): Promise<PrismaUser[]> {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error: any) {
      throw new Error('Erro ao buscar todos os usuários: ' + error.message);
    }
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
