import styled from 'styled-components';

export const StLeftSector = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StRightSector = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url(src/assets/img/uno-cards.jpeg);
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 15px;
  &::before,
  ::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
  }

  &:not(:empty)::before {
    margin-right: 0.25em;
  }

  &:not(:empty)::after {
    margin-left: 0.25em;
  }
`;

