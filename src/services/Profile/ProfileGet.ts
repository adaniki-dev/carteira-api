import { Profile } from '@src/models/Profile/ProfileModel';

export class ProfileServiceGet {
  static async getProfile(uid: string) {
    try {
      const profile = await Profile.get(uid);

      if(!profile) throw new Error('Perfil não encontrado');

      return profile;

    } catch (error: any) {
      throw new Error('Erro ao buscar todos os perfis: ' + error.message);
    }
  }
}