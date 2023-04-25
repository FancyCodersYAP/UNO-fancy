import { StModal } from 'components/Modal/style';
import {
  StPlayModalParagragh,
  StyledButtonStatusBar,
  StyledStatusBarIcon,
} from './style';

type PauseModalPropsType = {
  resumeGame: () => void;
};

export const PlayModal = ({ resumeGame }: PauseModalPropsType) => (
  <StModal onClick={resumeGame}>
    <StyledButtonStatusBar onClick={resumeGame} type="button">
      <StyledStatusBarIcon>
        <use href="/assets/icons/status-bar_sprite.svg#play"></use>
      </StyledStatusBarIcon>
      <StPlayModalParagragh>Продолжить</StPlayModalParagragh>
    </StyledButtonStatusBar>
  </StModal>
);
