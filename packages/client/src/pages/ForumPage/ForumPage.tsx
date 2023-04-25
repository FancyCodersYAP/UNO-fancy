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
import { useAppDispatch } from '../../hooks/redux';
import { fetchForumTopicPost } from '../../store/Forum/actions';

const marginBottom58px = css`
  margin: 0 0 58px;
`;

const ForumPage = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const interactionWithTopic = (evt: React.SyntheticEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;

    const basket = target.closest('button');

    if (basket) {
      const topic = basket.closest('article');
      const topicId = topic?.dataset.topic;
      console.log('Удаленная тема: ' + topicId);
      return;
    }

    const topic = target.closest('article');
    const topicId = topic?.dataset.topic;
    // временный код
    console.log('Выбранная тема: ' + topicId);
    navigate(`${AppRoute.FORUM}/${topicId}`);
  };
  const addTopicTest = async () => {
    const testData = {
      name: 'TestTopicName',
      description: 'TestTopicName TestTopicName TestTopicName',
    };
    // @ts-ignore
    dispatch(fetchForumTopicPost(testData));
  };

  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTable>
        <StHead>
          <div>
            <StButtonNewTopic onClick={addTopicTest}>
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
    </StBoard>
  );
};

export default ForumPage;
