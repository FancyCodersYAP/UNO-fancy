export type CardType = {
  id?: number;
  digit?: string;
  color?: string;
};

export type PlayerType = {
  id: number;
  name?: string;
  cards: CardType[];
  isBot?: boolean;
};
