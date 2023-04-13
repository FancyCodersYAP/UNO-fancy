import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { AppRoute } from 'utils/constants';
import useModal from 'hooks/useModal';
import ForumTopic from './ForumTopic';
import { testForumData } from 'data/testForumData';
import {
  stBoardStyle,
  StNewTopicIcon,
  StTable,
  StHead,
  StBody,
  StEmptyTable,
} from './style';
import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import { StButtonNewTopic } from 'components/Button/style';
import { isArrayAndHasItems } from 'utils';

const marginBottom58px = css`
  margin: 0 0 58px;
`;

const ForumPage = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const navigate = useNavigate();

  const navigateToTopic = (evt: React.SyntheticEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    const topic = target.closest('article');
    const topicId = topic?.dataset.topic;

    // временный код
    console.log('Выбранная тема: ' + topicId);

    navigate(`${AppRoute.FORUM}/${topicId}`);
  };

  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTable>
        <StHead>
          <p>
            <StButtonNewTopic onClick={handleOpenModal}>
              <StNewTopicIcon>
                <use href="/assets/icons/icons_sprite.svg#icon-plus"></use>
              </StNewTopicIcon>
            </StButtonNewTopic>
          </p>
          <p>тема</p>
          <p>всего сообщений</p>
          <p>автор</p>
          <p>последнее сообщение</p>
        </StHead>

        <StBody onClick={navigateToTopic}>
          {isArrayAndHasItems(testForumData) ? (
            testForumData.map((topic, index) => (
              <ForumTopic key={index + 1} {...topic} />
            ))
          ) : (
            <StEmptyTable>Форум пока пуст</StEmptyTable>
          )}
        </StBody>
      </StTable>
    </StBoard>
  );
};

export default ForumPage;
