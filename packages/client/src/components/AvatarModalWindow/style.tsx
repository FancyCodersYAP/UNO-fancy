import styled, { css } from 'styled-components';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';
import { BORDER_COLOR_BUTTON } from 'styles/variables/colors-const';
import { BOX_SHADOW_BUTTON } from 'styles/variables/styleConstants';
import Button from 'components/Button/Button';
import { StAvatar } from 'pages/ProfilePage/style';
import { FormError } from 'components/Form/style';

export const StAvatarContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
`;

export const avatarStyles = css``;

export const StAvatarInputWrapper = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

export const StAvatarInput = styled.input`
  opacity: 0;
  visibility: hidden;
  display: none;
`;

export const StAvatarLabel = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  color: ${props => props.theme?.COLOR_ELEMENT_SECONDARY};
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: ${BOX_SHADOW_BUTTON};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: ${BORDER_RADIUS_SIZE};
  padding: 10px 80px;
  cursor: pointer;
  background: ${props => {
    return `linear-gradient(180deg, ${props.theme?.COLOR_PREVIEW_PRIMARY} 0%, rgba(255, 255, 255, 0.3) 50%, ${props.theme?.COLOR_PREVIEW_PRIMARY} 100%);`;
  }};
  border: 1px solid ${BORDER_COLOR_BUTTON};
  box-shadow: ${BOX_SHADOW_BUTTON};

  &&:hover {
    filter: saturate(1.3);
  }
`;

export const StAvatarError = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  bottom: -25px;
  color: ${props => props.theme?.COLOR_ELEMENT_WARN};
  font-size: 12px;
  line-height: 1.2;
`;

export const StButtonWrapper = styled.div`
  position: relative;
`;

export const StError = styled(FormError)`
  font-size: 22px;
  bottom: -40px;
  transform: translateX(-50%);
`;

export const StAvatarModal = styled(StAvatar)`
  border: 1px solid ${props => props.theme?.COLOR_TEXT_PRIMARY};
  width: 160px;
  height: 160px;

  &:hover::before {
    display: none;
  }
`;

export const StButtonAvatar = styled(Button)`
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  width: 372px;
`;
