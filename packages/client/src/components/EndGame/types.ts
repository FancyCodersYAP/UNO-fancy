export interface EndGameType {
  time: string;
  countPlace: number;
  points: number;
  result: 'Победа' | 'Проигрыш';
  reactivateGame: () => void;
  navigateToMain: () => void;
}

export type MedalProps = {
  isWin: boolean;
};
