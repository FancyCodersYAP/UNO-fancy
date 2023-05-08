import { ITopicsForum, IUser } from '../store/types';

export interface DataRepository {
  getCurrentUser(): Promise<IUser>;
  getForumTopics(): Promise<ITopicsForum>;
}

export class DataService {
  constructor(private _repo: DataRepository) {}
  getCurrentUser() {
    return this._repo.getCurrentUser();
  }
  getForumTopics() {
    return this._repo.getForumTopics();
  }
}
