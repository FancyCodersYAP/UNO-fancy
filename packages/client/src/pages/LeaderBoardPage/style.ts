import styled from 'styled-components';

import * as COLORS from 'styles/variables/colors-const';

import { AvatarProps } from './types';

export const StBoard = styled.div`
  width: 65%;
  max-height: 90%;
  border-radius: 50px;
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  padding: 40px 64px;
  margin-bottom: auto;
  overflow: overlay;
  min-height: 200px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StTitle = styled.h1`
  text-align: center;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-size: 32px;
  line-height: 38px;
  font-weight: 500;
`;

export const StTable = styled.div`
  display: grid;
  gap: 2px;

  background-color: ${COLORS.COLOR_TABLE_BACKGROUND_PRIMARY};

  border: 2px solid rgba(91, 91, 91, 0.5);
  border-radius: 20px;
  overflow: hidden;

  color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  text-align: center;
`;

export const StPlayer = styled.div`
  gap: 10px;
  padding: 5px 10px;
`;

export const StHead = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 200px 200px;
  gap: 2px;
  grid-template-rows: 60px;

  & > div {
    background-color: ${props => props?.theme.COLOR_TABLE_BACKGROUND_PRIMARY};
    text-transform: uppercase;
    color: ${props => props?.theme.COLOR_TABLE_TEXT_PRIMARY};
    height: 100%;
    padding: 20px;
  }
`;

export const StBody = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 200px 200px;
  gap: 2px;
  grid-auto-rows: minmax(60px, auto);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props?.theme.COLOR_TABLE_BACKGROUND_SECONDARY};
    color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  }

  & > ${StPlayer} {
    text-align: left;
    justify-content: left;
  }
`;

export const StAvatar = styled.div`
  position: relative;
  min-width: 50px;
  min-height: 50px;
  background: ${({ image }: AvatarProps) => `url(${image}) center no-repeat`};
  background-size: cover;
  border-radius: 50%;

  &::before {
    display: ${({ label }) => label ? 'block' : 'none'};
    content: '';
    position: absolute;
    left: 28px;
    top: 23px;
    width: 30px;
    height: 30px;
    background: ${({ label }: AvatarProps) => `url(${label}) center no-repeat`};
    background-size: contain;
  }
`;

export const StPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  line-height: 48px;
  min-height: 400px;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
`;
