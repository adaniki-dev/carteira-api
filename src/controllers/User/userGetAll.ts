import { Request, Response } from 'express';
import { UserService } from '@src/services/User/userServices';

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar todos os usuários:', error);
      res.status(500).json({ error: 'Erro ao buscar todos os usuários' });
    }
  }
  
}
