import styled from 'styled-components';


export const St404Wrapper = styled.div`
  width: 450px;
  border-radius: 50px;
  background-color: ${props => props.theme?.COLOR_PREVIEW_PRIMARY};
  padding: 40px;

  p {
    color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
    margin-bottom: 40px;
    text-align: center;
  }
`;

