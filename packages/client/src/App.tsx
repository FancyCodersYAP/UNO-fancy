import { Routes, Route } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import PrivateRoute from 'components/PrivateRoute';
import { MainLayout, GameLayout } from 'components/Layout';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import MainPage from 'pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
import ForumPage from 'pages/ForumPage';

import { ThemeContextProvider } from 'contexts/ThemeContext';
import AuthRoute from './components/AuthRoute/AuthRuote';
import LeaderBoard from './pages/LeaderBoardPage';
import { GamePage } from 'pages/GamePage/GamePage';

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={AppRoute.MAIN} element={<MainPage />} />
          <Route
            path={AppRoute.LOGIN}
            element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            }
          />
          <Route
            path={AppRoute.REGISTRATION}
            element={
              <AuthRoute>
                <RegistrationPage />
              </AuthRoute>
            }
          />
          <Route
            path={AppRoute.PROFILE}
            element={<PrivateRoute>{<ProfilePage />}</PrivateRoute>}
          />
          <Route
            path={`${AppRoute.PROFILE}/:id`}
            element={<PrivateRoute>{<ProfilePage />}</PrivateRoute>}
          />
          <Route path={AppRoute.LEADERBOARD} element={<LeaderBoard />} />
          <Route path={AppRoute.FORUM} element={<ForumPage />} />
          <Route
            path={AppRoute.NOT_FOUND_PAGE}
            // element={<ErrorPage />}
          />
        </Route>
        <Route element={<GameLayout />}>
          <Route path={AppRoute.GAME} element={<GamePage />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
