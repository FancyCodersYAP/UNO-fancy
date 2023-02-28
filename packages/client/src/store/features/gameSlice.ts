import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CardType, PlayerType, Status } from "../../components/game/types";

type StoreState = {
  playerId: number;
  status: Status;
  tablePack: CardType[];
  players: PlayerType[];
  openCard: CardType | null;
  screenSize: Record<string, number>;
  currentPlayer: number;
  nextPlayer: number;
}

const initialState: StoreState = {
  playerId: 0,
  status: 'start',
  players: [],
  tablePack: [],
  openCard: null,
  screenSize: {width: 600, height: 600},
  currentPlayer: -1,
  nextPlayer: 2
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<any>) => {
      const { playerId, players, tablePack, openCard, curPlayer } = action.payload;
      state.playerId = playerId;
      state.players = players;
      state.tablePack = tablePack;
      state.openCard = openCard;
      state.currentPlayer = curPlayer;
    },
    game: (state, action: PayloadAction<any>) => {
      const { activePlayer, nextPlayer, openCard, tablePack, playerId, card } = action.payload;
      state.currentPlayer = activePlayer;
      state.nextPlayer = nextPlayer;
      state.openCard = openCard;
      state.tablePack = tablePack;
      state.players = state.players.map((player) => {
        if (player.id === playerId) {
          return {
            ...player,
            cards: player.cards.filter((c) => c.id !== card.id)
          }
        }
        return player;
      })
    },
    setPlayerId: (state, action: PayloadAction<number>) => {
      state.playerId = action.payload;
    },
    setPlayers: (state, action: PayloadAction<PlayerType[]>) => {
      state.players = [...action.payload];
    },
    setTablePack: (state, action: PayloadAction<CardType[]>) => {
      state.tablePack = [...action.payload];
    },
    setOpenCard: (state, action: PayloadAction<CardType>) => {
      state.openCard = action.payload;
    },
    setCurrentPlayer: (state, action: PayloadAction<number>) => {
      state.currentPlayer = action.payload;
    },
    setNextPlayer: (state, action: PayloadAction<number>) => {
      state.nextPlayer = action.payload;
    },
    changePlayersCards: (state, action: PayloadAction<{playerId: number, card: CardType}>) => {
      const {playerId, card} = action.payload;
      state.players = state.players.map((player) => {
        if (player.id === playerId) {
          return {
            ...player,
            cards: player.cards.filter((c) => c.id !== card.id)
          }
        }
        return player;
      })
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setScreenSize: (state, action: PayloadAction<Record<string, number>>) => {
      state.screenSize.width = action.payload.width;
      state.screenSize.height = action.payload.height;
    },
    addPlayer: (state, action: PayloadAction<PlayerType>) => {
      state.players.push(action.payload);
    }
  }
})

export const {
  start, game, setStatus, setTablePack, addPlayer, setPlayers,
  setOpenCard, setScreenSize, changePlayersCards,
  setCurrentPlayer, setNextPlayer, setPlayerId
} = gameSlice.actions;

export const selectPlayerId = (state: RootState) => state.game.playerId;
export const selectStatus = (state: RootState) => state.game.status;
export const selectPlayers = (state: RootState) => state.game.players;
export const selectCurrentPlayer = (state: RootState) => state.game.currentPlayer;
export const selectNextPlayer = (state: RootState) => state.game.nextPlayer;
export const selectTablePack = (state: RootState) => state.game.tablePack;
export const selectOpenCard = (state: RootState) => state.game.openCard;
export const selectscreenSize = (state: RootState) => state.game.screenSize;

export default gameSlice.reducer;