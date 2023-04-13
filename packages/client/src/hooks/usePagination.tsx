// Пока не используется
// Способ подключения:
// COUNT_PER_PAGE - количество старниц
// const {
//   firstContentIndex,
//   lastContentIndex,
//   nextPage,
//   prevPage,
//   page,
//   setPage,
//   totalPages,
// } = usePagination({
//   contentPerPage: COUNT_PER_PAGE,
//   count: testForumData.length,
// });

// <Pagination
//   page={page}
//   totalPages={totalPages}
//   nextPage={nextPage}
//   prevPage={prevPage}
//   setPage={setPage}
// />;
// Добавляется к массиву данных .slice(firstContentIndex, lastContentIndex)
interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}

import { useState } from 'react';

const usePagination = ({ contentPerPage, count }: UsePaginationProps) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage(state => {
      if ((direction && state === pageCount) || (!direction && state === 1)) {
        return state;
      }

      return direction ? state + 1 : state - 1;
    });
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};

export default usePagination;
