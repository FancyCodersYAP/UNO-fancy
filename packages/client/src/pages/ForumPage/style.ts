import styled, { css } from 'styled-components';
import {
  BORDER_RADIUS_SIZE,
  DEPTH_CONTAINER,
} from 'styles/variables/styleConstants';
import { customScrollbar } from 'styles/global';

export const stBoardStyle = css`
  min-width: 1128px;
`;

const tableCellStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const gridTemplateColumnsStyle = css`
  display: grid;
  grid-template-columns: 58px 1fr 163px 174px 305px;
`;

export const StNewTopicIcon = styled.svg`
  width: 13px;
  height: 14px;
`;

export const StDeleteTopicButton = styled.button`
  background-color: inherit;
  border-radius: initial;
  border: none;
  pointer-events: auto;
`;

export const StDeleteTopicIcon = styled.svg`
  width: 20px;
  height: 26px;
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
`;

export const StTable = styled.div`
  min-width: 1000px;

  border-radius: ${BORDER_RADIUS_SIZE} ${BORDER_RADIUS_SIZE} 10px 10px;
  overflow: hidden;

  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  text-align: center;
`;

export const StHead = styled.div`
  ${gridTemplateColumnsStyle};

  height: 68px;

  & > p,
  & > div {
    ${tableCellStyle}

    font-size: 18px;
    padding: 3px;
    height: 100%;
    background-color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const templateHeadWithScroll = css`
  ${StHead} {
    grid-template-columns: 58px 1fr 163px 174px 315px;
  }
`;

export const StBody = styled.div`
  ${customScrollbar}
  overflow-y: auto;
  max-height: 580px;
`;

export const StTableCell = styled.div`
  ${tableCellStyle}

  font-size: 22px;
  padding: 5px 12px;
  min-height: 68px;
  background-color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_SECONDARY};
  border: 1px solid ${props => props.theme?.COLOR_PREVIEW_PRIMARY};
`;

export const StTableTopic = styled.article`
  .cell__button_hovered {
    button {
      cursor: pointer;
    }

    svg {
      opacity: 0.5;
    }

    svg:hover {
      opacity: 1;
    }
  }

  .cell-content_left {
    text-align: left;
    justify-content: left;
  }

  .cell__font_small {
    font-size: 16px;
    line-height: 130%;
  }

  ${gridTemplateColumnsStyle}
  grid-auto-rows: minmax(68px, auto);

  & ${StTableCell}:nth-child(5n) {
    border-right: none;
  }

  & ${StTableCell}:nth-child(1) {
    border-left: none;
  }

  &:last-child ${StTableCell} {
    border-bottom: none;
  }

  &:hover {
    text-shadow: 2px 2px 2px rgb(0 0 0 / 50%);
  }

  pointer-events: none;

  & p {
    pointer-events: auto;
    cursor: pointer;
  }
`;

export const StEmptyTable = styled.p`
  font-size: 22px;
  background-color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_SECONDARY};
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  width: 100%;
  padding: 20px;
`;

export const StTitle = styled.h1`
  text-align: center;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-size: 32px;
  line-height: 38px;
  font-weight: 500;
  margin: 0 0 58px;
`;

export const StBoard = styled.div`
  width: 100%;
  border-radius: 50px;
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  box-shadow: ${DEPTH_CONTAINER};
  padding: 40px 64px;
  margin: 0 40px auto;
  overflow: overlay;
  min-height: 200px;
  min-width: 1128px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
