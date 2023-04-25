import { UserRepository } from '../api/UserService';
import axios from 'axios';
import { IUser } from '../store/types';

const REDIRECT_URI = 'http://localhost:3000';
const API_ROOT = `${REDIRECT_URI}/api/v2`;

export class YandexAPIRepository implements UserRepository {
  async getCurrent(): Promise<IUser> {
    const { data } = await axios.get(`${API_ROOT}/auth/user`, {
      withCredentials: true,
    });
    return data;
  }
}
