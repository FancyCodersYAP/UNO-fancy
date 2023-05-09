import { IUser } from '../store/types';

export interface UserRepository {
  getCurrent(): Promise<IUser>;
}

export class UserService {
  constructor(private _repo: UserRepository) {}
  getCurrentUser() {
    return this._repo.getCurrent();
  }
}
