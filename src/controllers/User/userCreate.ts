import { Request, Response } from 'express';
import { UserServiceCreate } from '@src/services/User/userCreate';

export class UserControllerCreate {
  static async createUser(req: Request, res: Response) {
    const { username, name, email, password, lastName, birthDate } = req.body;

    try {
      const newUser = await UserServiceCreate.createUser({ username, name, email, password, lastName, birthDate });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
  
}
