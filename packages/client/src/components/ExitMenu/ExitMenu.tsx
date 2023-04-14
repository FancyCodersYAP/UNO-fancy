import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StFlex } from 'styles/global';

interface ExitMenuType {
  handleCloseModal: () => void;
}

const ExitMenu = ({ handleCloseModal }: ExitMenuType) => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <StFlex>
      <Button onClick={handleCloseModal} text="Играть" disignType="primary" />
      <Button onClick={navigateToMain} text="Выход" disignType="alternate" />
    </StFlex>
  );
};

export default ExitMenu;
