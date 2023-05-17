import axios from 'axios';
import { addUserData } from '../controllers/user';
import { forumTopicsList } from '../controllers/forumTopicsList';
import { YANDEX_API_HOST } from '../config/constants';

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
export class ApiRepository {
  constructor(private _cookieHeader: string | undefined) {}

  async getCurrentUser(): Promise<IUser | unknown> {
    const { data } = await axios.get(`${YANDEX_API_HOST}/auth/user`, {
      headers: {
        cookie: this._cookieHeader,
      },
    });
    if (data?.id) {
      //TODO подумать над проверкой
      try {
        await addUserData(data);
      } catch (error) {
        console.log('  ➜ 💾 add user to DB error ⛔️');
      }
    }
    return data;
  }
  async getForumTopics() {
    return await forumTopicsList().catch(() => {
      console.log('  ➜ 📁 topics load DB error ⛔️');
    }); //TODO обработку ошибок добавить
  }
}
