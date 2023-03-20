import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import PrivateRoute from 'components/PrivateRoute';
import { MainLayout, GameLayout } from 'components/Layout';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import MainPage from 'pages/MainPage';

import { ThemeContextProvider } from 'contexts/ThemeContext';
import LeaderBoard from './pages/LeaderBoardPage';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);

  return (
    <ThemeContextProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={AppRoute.MAIN} element={<MainPage />} />
          <Route path={AppRoute.LOGIN} element={<LoginPage />} />
          <Route path={AppRoute.REGISTRATION} element={<RegistrationPage />} />
          <Route
            path={AppRoute.PROFILE}
            element={<PrivateRoute>{/* <ProfilePage /> */}</PrivateRoute>}
          />
          <Route path={AppRoute.LEADERBOARD} element={<LeaderBoard />} />
          <Route
            path={AppRoute.FORUM}
            // element={<ForumPage/>}
          />
          <Route
            path={AppRoute.NOT_FOUND_PAGE}
            // element={<ErrorPage />}
          />
        </Route>
        <Route element={<GameLayout />}>
          <Route
            path={AppRoute.GAME}
            // element={<GamePage />}
          />
        </Route>
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
