import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StTitle } from 'pages/LeaderBoardPage/style';
import { St404Wrapper } from './style';

import { css } from 'styled-components';

const marginBottom10px = css`
  margin-bottom: 10px;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <St404Wrapper>
      <StTitle css={marginBottom10px}>Ошибка 404</StTitle>
      <p>Такой страницы нет</p>
      <Button
        onClick={navigateToMain}
        text="На главную"
        disignType="alternate"
      />
    </St404Wrapper>
  );
};

export default NotFoundPage;
