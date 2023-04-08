import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { AppRoute } from 'utils/constants';
import useModal from 'utils/useModal';
import usePagination from 'utils/usePagination';
import ForumTopic from './ForumTopic';
import Pagination from 'components/Pagination';
import { testForumData } from 'assets/data/testForumData';
import { stBoardStyle, StNewTopicIcon, StTable, StHead, StBody } from './style';
import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import { StButtonNewTopic } from 'components/Button/style';

const COUNT_PER_PAGE = 5;

const marginBottom58px = css`
  margin: 0 0 58px;
`;

const ForumPage = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: COUNT_PER_PAGE,
    count: testForumData.length,
  });

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

      {testForumData.length > COUNT_PER_PAGE && (
        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
        />
      )}

      <StTable>
        <StHead>
          <div>
            <StButtonNewTopic onClick={handleOpenModal}>
              <StNewTopicIcon>
                <use href="src/assets/icons/icons_sprite.svg#icon-plus"></use>
              </StNewTopicIcon>
            </StButtonNewTopic>
          </div>
          <div>тема</div>
          <div>всего сообщений</div>
          <div>автор</div>
          <div>последнее сообщение</div>
        </StHead>
        <StBody>
          {testForumData
            .slice(firstContentIndex, lastContentIndex)
            .map((topic, index) => (
              <ForumTopic
                key={index + 1}
                {...topic}
                onClick={navigateToTopic}
              />
            ))}
        </StBody>
      </StTable>
    </StBoard>
  );
};

export default ForumPage;
