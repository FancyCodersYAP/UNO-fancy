import styled from 'styled-components';

export const St404Wrapper = styled.div`
  border-radius: 50px;
  background-color: ${props => props.theme?.COLOR_PREVIEW_PRIMARY};
  padding: 50px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const St404Text = styled.p`
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  margin: 10px 0 40px;
  text-align: center;
  font-size: 24px;
`;
