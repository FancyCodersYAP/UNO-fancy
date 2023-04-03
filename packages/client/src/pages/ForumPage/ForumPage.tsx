import Button from 'components/Button';
import { StFlex } from 'styles/global';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import { StTable, StHead, StBody } from './style';
import ForumTopic from './ForumTopic';
import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';

const marginButtom58px = css`
  margin: 0 0 58px;
`;

const ForumPage = () => {
  return (
    <StBoard>
      <StTitle css={marginButtom58px}>Форум</StTitle>
      <StTable>
        <StHead>
          <div>#</div>
          <div>тема</div>
          <div>всего сообщений</div>
          <div>автор</div>
          <div>последнее сообщение</div>
        </StHead>
        <StBody>
          <ForumTopic />
        </StBody>
      </StTable>
    </StBoard>
  );
};
export default ForumPage;
