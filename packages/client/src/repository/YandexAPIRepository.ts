import { UserRepository } from '../api/UserService';
import axios from 'axios';
import { IUser } from '../store/types';
import { API_ENDPOINTS } from '../store/constants';

export class YandexAPIRepository implements UserRepository {
  async getCurrent(): Promise<IUser> {
    const { data } = await axios.get(`${API_ENDPOINTS.auth}/user`, {
      withCredentials: true,
    });
    return data;
  }
}
