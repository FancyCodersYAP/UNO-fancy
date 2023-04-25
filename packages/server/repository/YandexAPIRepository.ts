import axios from 'axios';
import { addUserData } from '../models/User';

const API_ROOT = 'https://ya-praktikum.tech/api/v2/';

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  login: string;
  phone: string;
  avatar: string;
  status?: null;
}
export class YandexAPIRepository {
  constructor(private _cookieHeader: string | undefined) {}

  async getCurrent(): Promise<IUser | unknown> {
    const { data } = await axios.get(`${API_ROOT}/auth/user`, {
      headers: {
        cookie: this._cookieHeader,
      },
    });
    if (data?.id) {
      //TODO подумать над проверкой
      try {
        await addUserData(data);
      } catch (error) {
        console.log('💾 add user to DB error ⛔️');
      }
    }
    return data;
  }
}
