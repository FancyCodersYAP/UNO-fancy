import { DataRepository } from '../api/DataService';
import axios from 'axios';
import { IUser } from '../store/types';
import { API_ENDPOINTS } from '../store/constants';

const REDIRECT_URI = 'http://localhost:3000';
const API_ROOT = `${REDIRECT_URI}/api/v2`;

export class ApiRepository implements DataRepository {
  async getCurrentUser(): Promise<IUser> {
    const { data } = await axios.get(`${API_ROOT}/auth/user`, {
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
