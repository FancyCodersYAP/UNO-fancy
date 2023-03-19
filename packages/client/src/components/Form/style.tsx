import styled from 'styled-components';
import { DEPTH_CONTAINER } from 'styles/variables/styleConstants';

export const StFormTitle = styled.div`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;
`;

export const StFormSubtitle = styled.div`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  line-height: 1.2;
`;

export const StForm = styled.form`
  width: 400px;
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  padding: 40px 60px;
  box-shadow: ${DEPTH_CONTAINER};
  border-radius: 50px;
  box-sizing: border-box;
`;

export const StFormFooter = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  text-align: center;
`;
