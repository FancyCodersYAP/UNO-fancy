import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { MainLayout, GameLayout } from 'components/Layout';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import Modal from 'components/Modal/Modal';
import Rules from 'components/Rules/Rules';
import useModal from 'utils/useModal';

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

  const { isOpen, toggle } = useModal();

  return (
    <ThemeContextProvider>
      <MainLayout>
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={
              <Modal
                title="Правила игры"
                isOpen={isOpen}
                toggle={toggle}
                isPossibleToClose>
                <Rules />
              </Modal>
            }
            //element={<MainPage />} Главаная страница
          />
          <Route path={AppRoute.LOGIN} element={<LoginPage />} />
          <Route path={AppRoute.REGISTRATION} element={<RegistrationPage />} />
          <Route
            path={AppRoute.PROFILE}
            element={
              <PrivateRoute>
                {/* <ProfilePage /> Страница профиля */}
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.LEADERBOARD}
            // element={<LeaderboardPage/>} Страница с таблицкй очков
          />
          <Route
            path={AppRoute.FORUM}
            // element={<ForumPage/>} Страница форума
          />
          <Route
            path={AppRoute.NOT_FOUND_PAGE}
            // element={<ErrorPage />} Страница 404
          />
        </Routes>
      </MainLayout>
      <GameLayout>
        <Routes>
          <Route
            path={AppRoute.GAME}
            element={
              <PrivateRoute>{/* <GamePage/> Страница игры */}</PrivateRoute>
            }
          />
        </Routes>
      </GameLayout>
    </ThemeContextProvider>
  );
}

export default App;
