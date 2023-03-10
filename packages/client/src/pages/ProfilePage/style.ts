import styled, { css, CSSProp } from 'styled-components';
import Form from 'components/Form';

import { AvatarType } from 'types';

// export const StContainer = styled.div`
//   width: 65%;
//   max-height: 90%;
//   border-radius: 50px;
//   background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
//   box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
//   padding: 40px 64px;
//   margin-bottom: auto;
  
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const StyledForm = styled(Form)`
  width: 928px;
  padding: 40px 260px;
`;

export const StAvatar = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 0 auto;
  background: ${({ image }: AvatarType) => `url(${image}) center no-repeat`};
  background-color: ${props => props?.theme.COLOR_BACKGROUND_SECONDARY};

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

export const fieldListCss: CSSProp = css`
  gap: 20px;

`;