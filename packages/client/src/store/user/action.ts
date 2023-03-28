import { createAction } from '@reduxjs/toolkit'

export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
}

export const requiredAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION,
  status => {
    return {
      payload: status,
    }
  }
)
