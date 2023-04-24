import { BoardItemProps } from './types';
import { StPlayer, StAvatar } from './style';

const BoardItem: React.FC<BoardItemProps> = ({
  place,
  username,
  avatar,
  score,
  wins_2,
  wins_4,
}) => {
  const API_RESOURCES = 'https://ya-praktikum.tech/api/v2/resources';
  const image = avatar && API_RESOURCES + avatar;

  return (
    <>
      <div>{place}</div>
      <StPlayer>
        <StAvatar
          image={image}
          label={place === 1 ? 'assets/icons/medal.svg' : undefined}
        />
        {username}
      </StPlayer>
      <div>{score}</div>
      <div>{wins_2}</div>
      <div>{wins_4}</div>
    </>
  );
};

export default BoardItem;
