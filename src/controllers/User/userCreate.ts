import { Request, Response } from 'express';
import { UserCreateService } from '@src/services/User/userCreate';

export class UserCreateController {
  static async execute(req: Request, res: Response) {
    const { username, name, email, password, lastName, birthDate } = req.body;

    try {
      const newUser = await UserCreateService.execute({ username, name, email, password, lastName, birthDate });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
  
}
