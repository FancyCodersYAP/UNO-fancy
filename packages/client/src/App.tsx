import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from './consts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';
import LoginPage from './pages/LoginPage';
import * as light from 'styles/variables/colors-theme-light';
import * as dark from 'styles/variables/colors-theme-dark';
import { ThemeProvider } from 'styled-components';

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
  const themeArr = [light, dark];
  const [selectedTheme, setSelectedTheme] = useState(light);
  const HandleThemeChange = () => {
    const theme = themeArr.filter(elem => elem !== selectedTheme)[0];
    setSelectedTheme(theme);
    console.log('theme changer toggle');
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <Routes>
          <Route
            path={AppRoute.MAIN}
            //element={<MainPage />} Главаная страница
          />
          <Route
            path={AppRoute.LOGIN}
            element={<LoginPage themeChange={HandleThemeChange} />}
          />
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
              <PrivateRoute>{/* <GamePage/> Страница игры */}</PrivateRoute>
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
    </ThemeProvider>
  );
}

export default App;
