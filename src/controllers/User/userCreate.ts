import { Request, Response } from 'express';
import { UserService } from '@src/services/User/userServices';

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { username, name, email, password, lastName, birthDate } = req.body;

    try {
      const newUser = await UserService.createUser({ username, name, email, password, lastName, birthDate });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
  
}
