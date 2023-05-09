import Button from 'components/Button';
import Form from 'components/Form';
import styled, { css } from 'styled-components';
import { AvatarType } from 'types';
import { StButton } from 'components/Button/style';
import { BOX_SHADOW } from 'styles/variables/styleConstants';

export const StyledForm = styled(Form)`
  width: 928px;
  padding: 40px 260px 60px;
`;

export const StAvatar = styled.div<AvatarType>`
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 0 auto;
  background: ${({ image }) =>
    `url(${image || '/assets/icons/default-avatar.svg'}) center no-repeat`};
  background-color: ${props => props?.theme.COLOR_BACKGROUND_SECONDARY};
  background-size: ${({ image }) => (image ? 'cover' : 'auto')};

  &::before {
    content: 'Поменять аватар';
    position: absolute;
    left: 0;
    top: 0;
    width: 110px;
    height: 130px;
    border-radius: 50%;
    background-color: ${props => props?.theme.COLOR_ELEMENT_SECONDARY};
    color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
    font-size: 14px;
    line-height: 16px;
    padding: 0 10px;
    opacity: 0.8;
    cursor: pointer;

    display: none;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  &:hover::before {
    display: flex;
  }
`;

export const StUserName = styled.h1`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
`;

export const StFooterButton = styled(Button)`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  padding: 10px 30px;
  margin-top: 45px;
`;

export const StQuitButton = styled(StFooterButton)`
  margin: 50px auto 0;
  padding: 10px 50px;
  font-size: 16px;
  filter: drop-shadow(${BOX_SHADOW});
`;

export const StSaveButton = styled(StFooterButton)`
  padding: 10px 88px;
  margin: 50px auto 0;
`;

export const inputCss = css`
  text-align: right;
`;

export const stFlexStyles = css`
  position: relative;
`;

export const StButtonBackIcon = styled.svg`
  width: 36px;
  height: 113px;
`;

export const StButtonBackToProfile = styled(StButton)`
  position: absolute;
  left: 36px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  background-color: initial;
  border: none;
  box-shadow: none;

  &:hover svg {
    filter: drop-shadow(${BOX_SHADOW});
  }
`;
