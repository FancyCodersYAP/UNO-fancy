import axios from 'axios';
import { addUserData } from '../models/User';

const API_ROOT = 'https://ya-praktikum.tech/api/v2/';

export class YandexAPIRepository {
  constructor(private _cookieHeader: string | undefined) {}

  async getCurrent(): Promise<any> {
    // console.log('Запрос пользователя с сервера');
    const { data } = await axios.get(`${API_ROOT}/auth/user`, {
      headers: {
        cookie: this._cookieHeader,
      },
    });
    if (data && data.id) {
      //TODO подумать над проверкой
      addUserData(data);
    }
    return data;
  }
}
