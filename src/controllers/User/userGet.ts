import { Request, Response } from 'express';
import { UserServiceGet } from '@src/services/User/userGet';

export class UserControllerGet {
  static async getUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await UserServiceGet.getUserById(userId)
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  }
  
}
