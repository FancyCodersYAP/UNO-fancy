import styled, {css} from 'styled-components';
import { BACKGROUND_COLOR_TABLE_PRIMARY } from 'styles/variables/colors-const';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';

export const stBoardStyle = css`
  max-height: none;
  overflow: inherit;
  min-width: 1128px;
`;

const tableCellStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const gridTemplateColumnsStyle = css`
  display: grid;
  grid-template-columns: 58px 1fr 163px 174px 305px;
`;

export const StNewTopicIcon = styled.svg`
  width: 13px;
  height: 14px;
`;

export const StTable = styled.div`
  width: 100%;
  min-width: 1000px;

  border: 1px solid rgba(142, 121, 121, 0.81);
  border-radius: ${BORDER_RADIUS_SIZE};
  overflow: hidden;

  line-height: 130%;
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  text-align: center;
`;

export const StHead = styled.div`
  ${gridTemplateColumnsStyle}
  height: 68px;

  & > div {
    ${tableCellStyle}
    
    font-size: 18px;
    padding: 3px;
    height: 100%;
    background-color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const StTableCell = styled.div`
  ${tableCellStyle}
  
  font-size: 22px;
  padding: 5px 12px;
  min-height: 68px;
  background-color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_SECONDARY};
  border: 1px solid ${BACKGROUND_COLOR_TABLE_PRIMARY};
`;

export const StBody = styled.div``;

export const StTableColumn = styled.article`
  ${gridTemplateColumnsStyle}
  grid-auto-rows: minmax(68px, auto);
  cursor: pointer;

  & ${StTableCell}:nth-child(5n) {
    border-right: none;
  }

  & ${StTableCell}:nth-child(1) {
    border-left: none;
  }

  &:last-child ${StTableCell} {
    border-bottom: none;
  }
`;
