import styled from 'styled-components';
import { StButton } from 'components/Button/style';

export const StEmojiWrapper = styled.div`
  position: absolute;
  bottom: 36%;
  z-index: 100;
  right: 14%;
`;

export const StButtonEmoji = styled(StButton)`
  background-color: initial;
  box-shadow: none;
`;

export const StSmileIcon = styled.svg`
  width: 36px;
  height: 36px;
  color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
  filter: opacity(50%);
`;

export const StEmojiContainer = styled.ul`
  position: absolute;
  top: -70px;
  left: -111px;
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 9px;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &::after {
    position: absolute;
    content: '';
    bottom: -20px;
    right: 11px;
    border: 10px solid transparent;
    border-top: 10px solid rgba(0, 0, 0, 0.1);
  }
`;

export const StEmojiItem = styled.li`
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
