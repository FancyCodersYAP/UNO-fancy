import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { AppRoute } from 'utils/constants';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import AddTopic from 'components/AddTopic';
import ForumTopic from './ForumTopic';
import {
  stBoardStyle,
  StNewTopicIcon,
  StTable,
  StHead,
  StBody,
  StEmptyTable,
  templateHeadWithScroll,
} from './style';
import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import { StButtonNewTopic } from 'components/Button/style';
import { isArrayAndHasItems } from 'utils';
import { useAppDispatch } from 'hooks/redux';
import { fetchForumTopicsGet } from 'store/Forum/forumActions';
import { useEffect, useRef } from 'react';
import { useAppSelector } from 'hooks/redux';
import { useTitle, TITLES } from 'utils/useTitle';

const marginBottom58px = css`
  margin: 0 0 58px;
`;

const addTopicModalStyles = css`
  width: 700px;
  padding: 60px 100px 70px;
`;

const ForumPage = () => {
  useTitle(TITLES.forum);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const dispatch = useAppDispatch();

  const forumTopics = useAppSelector(state => state.FORUM.forumTopics);
  const isLoading = useAppSelector(state => state.FORUM.isLoading);

  useEffect(() => {
    dispatch(fetchForumTopicsGet());
  }, []);

  const navigate = useNavigate();
  const interactionWithTopic = (evt: React.SyntheticEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;

    const basket =
      target.closest('button') ||
      [...target.children].filter(el => el.closest('button'))[0];

    if (basket) {
      return;
    }
    const topic = target.closest('article');

    if (!topic) return;

    const topicId = topic?.dataset.topic;
    navigate(`${AppRoute.FORUM}/${topicId}`);
  };

  const tableRef = useRef<HTMLDivElement | null>(null);

  const headStyleTemplate = css`
    ${tableRef.current &&
    tableRef.current.scrollHeight > tableRef.current?.clientHeight
      ? templateHeadWithScroll
      : ''}
  `;

  if (!forumTopics?.length && isLoading) return <></>;

  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTable css={headStyleTemplate}>
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

        <StBody ref={tableRef} onClick={interactionWithTopic}>
          {isArrayAndHasItems(forumTopics) ? (
            forumTopics.map(topic => <ForumTopic key={topic.id} {...topic} />)
          ) : isLoading ? (
            <StEmptyTable>Загрузка...</StEmptyTable>
          ) : (
            <StEmptyTable>Список тем пока пуст</StEmptyTable>
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
