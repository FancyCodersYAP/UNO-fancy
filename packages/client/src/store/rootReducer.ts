import { combineReducers } from 'redux';
import { user } from './user/user';

export const NameSpace = {
  USER: `USER`,
}

export default combineReducers({
  [NameSpace.USER]: user,
})
