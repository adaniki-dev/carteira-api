import { Request, Response } from 'express';
import { ProfileServiceGet } from '@src/services/Profile/ProfileGet';

export class ProfileControllerGet {
  static async getProfile(req: Request, res: Response) {
    try {
      const profileId = req.params.id;
      const profile = await ProfileServiceGet.getProfile(profileId)
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(404).json({ error: 'Perfil não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      res.status(500).json({ error: 'Erro ao buscar perfil' });
    }
  }
}