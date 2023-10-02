import { Request, Response } from 'express';
import { UserGetAllService } from '@src/services/User/userGetAll';

export class UserGetAllController {
  static async execute(req: Request, res: Response) {
    try {
      const users = await UserGetAllService.execute();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar todos os usuários:', error);
      res.status(500).json({ error: 'Erro ao buscar todos os usuários' });
    }
  }
  
}
