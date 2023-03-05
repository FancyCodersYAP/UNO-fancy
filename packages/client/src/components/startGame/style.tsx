import styled from 'styled-components';
import * as COLORS from 'styles/variables/colors';
import { StButton } from 'components/Button/Button';

export const StStartGame = styled.section`
  background-color: ${COLORS.BLACK_OPACITY_05};
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const StStartGameWrapper = styled.div`
  background-color: ${COLORS.BACKGROUND_LAYOUT_COLOR};
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  min-width: 600px;
`;

export const StStartGameTitle = styled.h3`
  color: ${COLORS.MAIN_TEXT_COLOR};
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
  color: ${COLORS.MAIN_TEXT_COLOR};
`;

export const StStartGameButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StStartGameLink = styled.a`
  text-decoration: none;
  color: ${COLORS.MAIN_TEXT_COLOR};
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.6;
  }
`;

export const StStartGameButton = styled(StButton)`
  min-width: 150px;
`;
