import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  isGame: boolean;
}

const initialState: GameState = {
  isGame: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeGameStatus(state) {
      state.isGame = true;
    },
  },
});

export const { changeGameStatus } = gameSlice.actions;

export default gameSlice.reducer;
