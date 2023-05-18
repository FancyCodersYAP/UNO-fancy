import { StButtonStatusBar, StStatusBarIcon } from 'components/StatusBar/style';
import { GAME_STYLES } from 'game/styles';
import styled from 'styled-components';
import { StFlex } from 'styles/global';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .layer {
    position: absolute;
    display: flex;
    align-items: center;
  }

  .layer-horizontal {
    flex-direction: column;
    justify-content: center;
  }

  .layer_front {
    bottom: 10px;
  }

  .layer_top {
    top: 10px;
  }

  .layer_left {
    left: 10px;
  }

  .layer_right {
    right: 10px;
  }

  .canvas_animation {
    position: absolute;
  }

  .name_layer {
    text-align: center;
    color: #ffffff80;
    font-family: ${GAME_STYLES.FONT_FAMILY_MAIN};
    font-weight: 600;
    line-height: 0;
    margin: 0;
  }

  .button_and_box {
    position: absolute;
    border-radius: 1em;
    z-index: 31;
    border: 4px solid ${GAME_STYLES.BG_COLOR_MAIN};
    box-shadow: 0px 0px 5px rgba(58, 93, 112, 0.7);
  }

  .uno_button {
    margin: auto;
    background-color: #3a5d70;
    text-align: center;
    color: ${GAME_STYLES.BG_COLOR_MAIN};
  }

  .color_box {
    transform: rotate(45deg);
  }

  .bubble {
    position: absolute;
    z-index: 3;
    background-color: ${GAME_STYLES.BG_COLOR_MAIN};
    border-radius: 1em;
    box-shadow: 0px 0px 5px rgba(58, 93, 112, 0.7);
    color: ${GAME_STYLES.FONT_COLOR_DARK};
    font-family: ${GAME_STYLES.FONT_FAMILY_MAIN};
    font-weight: 600;
    text-align: center;
  }

  .bubble_horizontal {
    margin-left: auto;
    margin-right: auto;
  }

  .bubble_vertical {
    margin-top: auto;
    margin-bottom: auto;
    bottom: 100px;
    top: 0;
  }

  .bubble_front {
    left: 100px;
    right: 0;
  }

  .bubble_top {
    right: 100px;
    left: 0;
  }
`;

export const StyledButtonStatusBar = styled(StButtonStatusBar)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledStatusBarIcon = styled(StStatusBarIcon)`
  width: 300px;
  height: 260px;
`;

export const StPlayModalParagragh = styled.p`
  margin: 0 0 15px 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: white;
`;
