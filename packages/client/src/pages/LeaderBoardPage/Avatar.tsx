import styled, { css } from 'styled-components';
import { AvatarProps } from './types';
import { API_ENDPOINTS } from 'store/constants';

const StAvatar = styled.div<AvatarProps>`
  display: flex;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ avatar }) => `url(${avatar}) center no-repeat`};
  background-color: ${props =>
    !props.avatar && props?.theme.COLOR_BACKGROUND_SECONDARY};
  background-size: cover;
`;

const StAvatarIcon = styled.svg`
  width: 40px;
  height: 40px;
  margin: auto;
  fill: #cdcdcd;
`;

export const LeaderboardAvatarStyles = css`
    &:before {
        content: '';
        position: absolute;
        left: 28px;
        top: 23px;
        width: 30px;
        height: 30px;
        background: url('assets/icons/medal.svg') center no-repeat;
        background-size: contain;
    },
`;

const Avatar: React.FC<AvatarProps> = ({ avatar, styles }) => {
  const image = avatar && API_ENDPOINTS.resources + avatar;

  return (
    <StAvatar avatar={image} css={styles}>
      {!avatar && (
        <StAvatarIcon>
          <use href="/assets/icons/icons_sprite.svg#default-avatar"></use>
        </StAvatarIcon>
      )}
    </StAvatar>
  );
};

export default Avatar;
