import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from './consts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';
import LoginPage from './pages/LoginPage';
import Settings from './components/Settings/Settings';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route
          path={AppRoute.MAIN}
          element={<Settings/>}
          //element={<MainPage />} Главаная страница
        />
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoute.REGISTRATION}
          // element={<RegistrationPage/>} Страница регистрации
        />
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
          path={AppRoute.GAME}
          element={
            <PrivateRoute>
              {/* <GamePage/> Страница игры */}
            </PrivateRoute>
          }
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
    </div>
  );
}

export default App;
