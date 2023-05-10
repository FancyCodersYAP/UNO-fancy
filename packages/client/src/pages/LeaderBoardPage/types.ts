import { CSSProp } from 'styled-components';
import { PlayerType } from 'types';

export interface BoardItemProps extends PlayerType {
  place?: number;
}

export interface AvatarProps {
  avatar?: string;
  styles?: CSSProp;
}

export interface LeaderBoardTableBodyType {
  hasScroll: boolean;
}
