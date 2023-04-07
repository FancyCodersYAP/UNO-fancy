import styled from 'styled-components';

export const StPagination = styled.div`
  margin: 0 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StPaginationCount = styled.div`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
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
