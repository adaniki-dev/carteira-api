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

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar todos os usuários:', error);
      res.status(500).json({ error: 'Erro ao buscar todos os usuários' });
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId)
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
