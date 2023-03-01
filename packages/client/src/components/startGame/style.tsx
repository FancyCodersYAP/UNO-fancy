import styled from 'styled-components';
import { variables } from 'styles/variables';

export const StStartGame = styled.section`
  background-color: ${variables.backgroundPopupColor};
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const StStartGameWrapper = styled.div`
  background-color: #d6a13b;
  border-radius: ${variables.borderRadius};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  min-width: 600px;
`;

export const StStartGameTitle = styled.h3`
  color: white;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-bottom: 50px;
`;

export const StStartGameImgs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const StStartGameImgWrapper = styled.div`
  max-width: 180px;
  text-align: center;
`;

export const StStartGameImg = styled.img`
  max-width: 160px;
  max-height: 160px;
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;

export const StStartGameText = styled.span`
  font-size: 16px;
  text-align: center;
  color: white;
`;


export const StStartGameButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StStartGameLink = styled.a`
  text-decoration: none;
  color: white;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;


export const StStartGameButton = styled.button`
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

