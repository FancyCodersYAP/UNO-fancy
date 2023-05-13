import { AppDispatch } from 'store/store';
import MainPage from 'pages/MainPage';
import ForumPage from '../pages/ForumPage';
import { fetchForumTopicsGet } from '../store/Forum/forumActions';

export const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/forum',
    component: ForumPage,
    loader: (dispatch: AppDispatch) => {
      return dispatch(fetchForumTopicsGet());
    },
  },
];
