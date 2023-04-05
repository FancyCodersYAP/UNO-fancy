import styled, {css} from 'styled-components';

export const stBoardStyle = css`
  max-height: none;
  overflow: inherit;
`;

const textAlignCenter = css`
  text-align: center;
  line-height: 130%;
`;

export const StNewTopicIcon = styled.svg`
  width: 13px;
  height: 14px;
`;

export const StTableWrapper = styled.div`
  border: 1px solid rgba(142, 121, 121, 0.81);
  border-radius: 20px;
  width: 100%;
`;

export const StTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StTableTh = styled.th`
  ${textAlignCenter}
  font-size: 18px;
  padding: 20px 3px;
  background-color: ${props => props?.theme.BACKGROUND_COLOR_FORUM_PRIMARY};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
`;

export const StTableTd = styled.td`
  ${textAlignCenter}
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 22px;
  padding: 5px 12px;
  background-color: ${props => props?.theme.BACKGROUND_COLOR_FORUM_SECONDARY};
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  height: 68px;
`;

export const StTableTr = styled.tr`
  & ${StTableTh}:first-child {
    border-radius: 20px 0 0 0;
  }

  & ${StTableTh}:last-child {
    border-radius: 0 20px 0 0;
  }

  & ${StTableTd}:first-child {
    border-left: none;
  }

  & ${StTableTd}:last-child {
    border-right: none;
  }

  &:last-child ${StTableTd} {
    border-bottom: none;
  }

  &:last-child ${StTableTd}:first-child {
    border-radius: 0 0 0 20px;
  }

  &:last-child ${StTableTd}:last-child {
    border-radius: 0 0 20px 0;
  }
`;

export const width58px = css`
  width: 58px;
`;

export const width44Percent = css`
  width: 38%;
`;

export const width163pxpx = css`
  width: 163px;
`;

export const widthMaxContent = css`
  width: max-content;
`;

export const width305px = css`
  width: 305px;
`;
