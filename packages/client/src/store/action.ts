import { createAction } from '@reduxjs/toolkit'

export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  PLAY_WITH_COMPUTER: `game/palyWithComputer`,
}

export const requiredAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION,
  status => {
    return {
      payload: status,
    }
  }
)

export const palyWithComputer = createAction(ActionType.PLAY_WITH_COMPUTER, (status) => {
  return {
    payload: status,
  }
});
