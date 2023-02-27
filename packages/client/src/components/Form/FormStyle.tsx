import styled from 'styled-components';
import { variables } from 'styles/variables';

export const StFormTitle = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;

export const StFormSubtitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
`;

export const StForm = styled.form`
  width: 320px;
  background-color: ${variables.backgroundFormColor};
  border-radius: 20px;
  padding: 20px;
`;

export const StFooter = styled.div`
  margin-top: 40px;
`;

export const StSubmitButton = styled.button`
  background-color: #359742;
  border-radius: 12px;
  border: 0;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  text-align: center;
  width: 100%;
`;

export const StButton = styled.button`
  border-radius: 12px;
  border: 0;
  color: black;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  text-align: center;
  width: 100%;
`;
