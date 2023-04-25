import Button from 'components/Button';
import { StFlex } from 'styles/global';

interface ExitMenuType {
  resumeGame: () => void;
  navigateToMain: () => void;
}

const ExitMenu = ({ resumeGame, navigateToMain }: ExitMenuType) => (
  <StFlex>
    <Button onClick={resumeGame} text="Играть" disignType="primary" />
    <Button onClick={navigateToMain} text="Выход" disignType="alternate" />
  </StFlex>
);

export default ExitMenu;
