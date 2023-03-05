import { PlayerType } from 'types';

export interface BoardItemProps extends PlayerType {
  place?: number;
}

export interface AvatarProps {
  image?: string;
  label: string | boolean;
}
