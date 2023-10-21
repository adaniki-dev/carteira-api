import { Profile } from '@src/models/Profile/ProfileModel';
import { Profile as PrismaProfile } from '@prisma/client';

export class ProfileServiceCreate {
  static async createProfile(profileData: Partial<PrismaProfile>) {
    const profile = new Profile(profileData);
    await profile.save();
    return profile;
  }
}