import { Request, Response } from 'express';
import { ProfileServiceCreate } from '@src/services/Profile/ProfileCreate';

export class ProfileControllerCreate {
  static async createProfile(req: Request, res: Response) {
    const { name, userId } = req.body;

    try {
      const newProfile = await ProfileServiceCreate.createProfile({ name, userId });
      res.status(201).json(newProfile);
    } catch (error) {
      console.error('Erro ao criar perfil:', error);
      res.status(500).json({ error: 'Erro ao criar perfil' });
    }
  }
  
}