export interface IUser {
  email: string;
  password: string;
}

export interface IUserToken extends Pick<IUser, 'email'> {
  token: string;
}

export class User implements IUser {
  email: string;
  password: string;

  constructor(params?: IUser) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
