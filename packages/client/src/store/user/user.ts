import { requiredAuthorization } from './action';
import { AuthorizationStatus } from 'utils/constants';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH, //на будущее стоит его переделать в деф данные по профилю
};
//авторизацию сделал в другом редьюсере от можно использовать под профиль
const user = createReducer(initialState, builder => {
  builder.addCase(requiredAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export { user };
