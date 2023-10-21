import { Request, Response } from 'express';
import { ProfileServiceGetAll } from '@src/services/Profile/ProfileGetAll';

export class ProfileControllerGetAll {
  static async getAllProfiles(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const profiles = await ProfileServiceGetAll.getAllProfiles(userId)
      if (profiles) {
        res.status(200).json(profiles);
      } else {
        res.status(404).json({ error: 'Perfil não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      res.status(500).json({ error: 'Erro ao buscar perfil' });
    }
  }
}