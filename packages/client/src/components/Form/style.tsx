import styled from 'styled-components';
import { variables } from 'styles/variables';

export const StFormTitle = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
`;

export const StFormSubtitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
`;

export const StForm = styled.form`
  width: 350px;
  background-color: ${variables.backgroundForm};
  padding: 40px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  box-sizing: border-box;
`;

export const StFooter = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
