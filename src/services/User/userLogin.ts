import { User } from "@src/models/User/UserModel";

export class UserServiceLogin {
  static async login(email: string, password: string) {
    const userLogin = await User.authenticate(email, password);
    if(!userLogin) {
        throw new Error('Usuário não encontrado.');
    }

    if(userLogin) {
        const accessToken = await User.generateAccessToken(userLogin.id);
        return {
            user: userLogin,
            accessToken: accessToken
        };
    }
  }
}