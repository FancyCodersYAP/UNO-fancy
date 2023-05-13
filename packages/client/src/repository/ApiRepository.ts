import { DataRepository } from '../api/DataService';
import axios from 'axios';
import { IUser } from '../store/types';
import { API_ENDPOINTS } from '../store/constants';

export class ApiRepository implements DataRepository {
  async getCurrentUser(): Promise<IUser> {
    const { data } = await axios.get(`${API_ENDPOINTS.auth}/user`, {
      withCredentials: true,
    });
    return data;
  }

  async getForumTopics() {
    const { data } = await axios.get(API_ENDPOINTS.forum, {
      withCredentials: true,
    });
    return data;
  }
}
