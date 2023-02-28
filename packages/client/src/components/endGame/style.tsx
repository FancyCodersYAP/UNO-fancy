import styled from 'styled-components';
import { variables } from 'styles/variables';

export const StEndGame = styled.section`
  background-color: ${variables.backgroundPopupColor};
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const StEndGameWrapper = styled.div`
  background-color: #d6a13b;
  border-radius: ${variables.borderRadius};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  min-width: 400px;
`;

export const StEndGameTitle = styled.h3`
  color: white;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-bottom: 50px;
`;

export const StEndGameButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StEndGameButton = styled.button`
  background-color: #00c0d2;
  border-radius: 12px;
  border: 0;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  text-align: center;
  min-width: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(130, 128, 128, 0.25);
`;

