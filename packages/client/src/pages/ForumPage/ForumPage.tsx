import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { AppRoute } from 'utils/constants';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import AddTopic from 'components/AddTopic';
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

const addTopicModalStyles = css`
  width: 700px;
  padding: 60px 100px 70px;
`;

const ForumPage = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const navigate = useNavigate();

  const interactionWithTopic = (evt: React.SyntheticEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;

    const basket = target.closest('button');

    if (basket) {
      return;
    }

    const topic = target.closest('article');
    const topicId = topic?.dataset.topic;
    navigate(`${AppRoute.FORUM}/${topicId}`);
  };

  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTable>
        <StHead>
          <div>
            <StButtonNewTopic onClick={handleOpenModal}>
              <StNewTopicIcon>
                <use href="/assets/icons/icons_sprite.svg#icon-plus"></use>
              </StNewTopicIcon>
            </StButtonNewTopic>
          </div>
          <p>тема</p>
          <p>всего сообщений</p>
          <p>автор</p>
          <p>последнее сообщение</p>
        </StHead>

        <StBody onClick={interactionWithTopic}>
          {isArrayAndHasItems(testForumData) ? (
            testForumData.map(topic => <ForumTopic key={topic.id} {...topic} />)
          ) : (
            <StEmptyTable>Форум пока пуст</StEmptyTable>
          )}
        </StBody>
      </StTable>

      {isOpen && (
        <Modal title="Создание темы" styles={addTopicModalStyles}>
          <AddTopic handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </StBoard>
  );
};

export default ForumPage;
