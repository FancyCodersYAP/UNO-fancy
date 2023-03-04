import { palyWithComputer } from '../action'
import { GameWithComputerStatus } from '../../consts'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  gameWithComputerStatus: GameWithComputerStatus.DISABLED,
}

const game = createReducer(initialState, builder => {
  builder.addCase(palyWithComputer, (state, action) => {
    state.gameWithComputerStatus = action.payload
  })
})

export { game }