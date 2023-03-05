export type CardType = {
  id?: number;
  sign?: string;
  color?: string;
  action?: string;
};

export type PlayerType = {
  id: number;
  name?: string;
  cards: CardType[];
  isBot?: boolean;
};
