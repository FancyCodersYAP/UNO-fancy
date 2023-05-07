import { BoardItemProps } from './types';
import { StPlayer } from './style';
import Avatar from './Avatar';
import { LeaderboardAvatarStyles } from './Avatar';

const BoardItem: React.FC<BoardItemProps> = ({
  place,
  username,
  avatar,
  score,
  wins_2,
  wins_4,
}) => (
  <>
    <div>{place}</div>
    <StPlayer>
      <Avatar
        avatar={avatar}
        styles={place === 1 ? LeaderboardAvatarStyles : undefined}
      />
      {username}
    </StPlayer>
    <div>{score}</div>
    <div>{wins_2}</div>
    <div>{wins_4}</div>
  </>
);

export default BoardItem;
