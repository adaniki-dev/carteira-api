import { Profile } from '@src/models/Profile/ProfileModel';

export class ProfileServiceGetAll {
  static async getAllProfiles(userId: string) {
    try {
      const profiles = await Profile.getAll(userId);
      return profiles;
    } catch (error: any) {
      throw new Error('Erro ao buscar todos os perfis: ' + error.message);
    }
  }
}