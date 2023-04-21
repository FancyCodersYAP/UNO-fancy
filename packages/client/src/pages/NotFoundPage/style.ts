import styled from 'styled-components';

export const St404Wrapper = styled.div`
  border-radius: 50px;
  background-color: ${props => props.theme?.COLOR_PREVIEW_PRIMARY};
  padding: 50px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
    margin: 20px 0 60px;
    text-align: center;
  }
`;
