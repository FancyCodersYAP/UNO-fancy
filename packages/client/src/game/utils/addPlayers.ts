import { GamePlayerType } from 'game/types';
import { namesForBots } from 'game/utils/data';

/* Добавление в игру юзера и ботов */
export const addPlayers = (
  playersNum: number,
  playerData: GamePlayerType
): GamePlayerType[] => {
  const players = [] as GamePlayerType[];

  for (let i = 0; i < playersNum; i++) {
    const playerId = i;

    if (i === 0) {
      players.push({ ...playerData, playerId: playerId });
    } else {
      const botName = namesForBots[i - 1];

      players.push({
        username: botName,
        playerId: playerId,
        isBot: true,
      });
    }
  }

  return players;
};
