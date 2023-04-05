import { css } from 'styled-components';
import { StButtonNewTopic } from 'components/Button/style';
import ForumTopic from './ForumTopic';
import { testForumData } from 'assets/data';
import useModal from 'utils/useModal';
import {
  stBoardStyle,
  StNewTopicIcon,
  StTableWrapper,
  StTable,
  StTableTr,
  StTableTh,
  width58px,
  width44Percent,
  width163pxpx,
  widthMaxContent,
  width305px,
} from './style';
import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import usePagination from 'utils/usePagination';
import Pagination from 'components/Pagination';

const COUNT_PER_PAGE = 5;

const marginButtom58px = css`
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
      <StTitle css={marginButtom58px}>Форум</StTitle>

      <StTableWrapper>
        <StTable>
          <thead>
            <StTableTr>
              <StTableTh css={width58px}>
                <StButtonNewTopic onClick={handleOpenModal}>
                  <StNewTopicIcon>
                    <use href="src/assets/icons/icons_sprite.svg#icon-plus"></use>
                  </StNewTopicIcon>
                </StButtonNewTopic>
              </StTableTh>
              <StTableTh css={width44Percent}>тема</StTableTh>
              <StTableTh css={width163pxpx}>всего сообщений</StTableTh>
              <StTableTh css={widthMaxContent}>автор</StTableTh>
              <StTableTh css={width305px}>последнее сообщение</StTableTh>
            </StTableTr>
          </thead>

          <tbody>
            {testForumData
              .slice(firstContentIndex, lastContentIndex)
              .map((topic, index) => (
                <ForumTopic key={index + 1} {...topic} />
              ))}
          </tbody>
        </StTable>
      </StTableWrapper>

      {testForumData.length > COUNT_PER_PAGE && (
        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
        />
      )}
    </StBoard>
  );
};

export default ForumPage;
