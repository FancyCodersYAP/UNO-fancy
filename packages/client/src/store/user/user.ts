import { requiredAuthorization } from '../action'
import { AuthorizationStatus } from '../../consts'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
}

const user = createReducer(initialState, builder => {
  builder.addCase(requiredAuthorization, (state, action) => {
    state.authorizationStatus = action.payload
  })
})

export { user }
