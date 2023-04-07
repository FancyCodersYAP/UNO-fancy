import { css } from 'styled-components';
import { StButtonNewTopic } from 'components/Button/style';
import ForumTopic from './ForumTopic';
import { testForumData } from 'assets/data/testForumData';
import useModal from 'utils/useModal';
import { stBoardStyle, StNewTopicIcon } from './style';
import { StTable, StHead, StBody } from './style';
import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import usePagination from 'utils/usePagination';
import Pagination from 'components/Pagination';

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
              <ForumTopic key={index + 1} {...topic} />
            ))}
        </StBody>
      </StTable>
    </StBoard>
  );
};

export default ForumPage;
