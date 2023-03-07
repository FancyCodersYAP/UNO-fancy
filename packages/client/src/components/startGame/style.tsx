import styled from 'styled-components';
import * as COLORS from '../../styles/variables/colors-const';

export const StStartGame = styled.section`
  background-color: ${COLORS.BACKGROUND_ELEMENT_OPACITY};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

export const StStartGameWrapper = styled.div`
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  min-width: 600px;
`;

export const StStartGameTitle = styled.h3`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
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
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;

export const StStartGameNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
