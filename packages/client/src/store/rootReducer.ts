import { combineReducers } from 'redux';
import { user } from './user/user';
import { game } from './game/game';

export const NameSpace = {
  USER: `USER`,
  GAME: `GAME`,
}

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.GAME]: game,
})
