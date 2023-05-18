import styled from 'styled-components';
import { StTitle } from 'pages/LeaderBoardPage/style';

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
  margin: 20px 0 40px;
  text-align: center;
  font-size: 22px;
`;

export  const StTitle404 = styled(StTitle)`
  font-size: 42px;
  margin-bottom: 20px;
`;
