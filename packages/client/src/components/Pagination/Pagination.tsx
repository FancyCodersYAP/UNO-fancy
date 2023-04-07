import {
  StPagination,
  StPaginationCount,
  StPaginationButtons,
  StPaginationButton,
} from './style';

interface PaginationType {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

const Pagination = ({
  page,
  totalPages,
  nextPage,
  prevPage,
  setPage,
}: PaginationType) => {
  return (
    <StPagination>
      <StPaginationButtons>
        <StPaginationButton onClick={prevPage}>&larr;</StPaginationButton>
        {[...Array(totalPages).keys()].map(el => (
          <StPaginationButton
            onClick={() => setPage(el + 1)}
            key={`page-${el}`}
            className={`${page === el + 1 ? 'page--active' : ''}`}>
            {el + 1}
          </StPaginationButton>
        ))}
        <StPaginationButton onClick={nextPage}>&rarr;</StPaginationButton>
      </StPaginationButtons>

      <StPaginationCount>
        {page}/{totalPages}
      </StPaginationCount>
    </StPagination>
  );
};

export default Pagination;
