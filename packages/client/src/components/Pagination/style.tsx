import styled from 'styled-components';

export const StPagination = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const StPaginationCount = styled.div`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-align: right;
  margin-right: 10px;
`;

export const StPaginationButtons = styled.div`
  text-align: center;

  .page--active {
    background-color: ${props => props?.theme.BACKGROUND_COLOR_TABLE_PRIMARY};
  }
`;

export const StPaginationButton = styled.button`
  padding: 10px;
  width: 40px;
`;
