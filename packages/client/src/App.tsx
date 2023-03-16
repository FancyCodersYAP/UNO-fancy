import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppRoute } from 'utils/constants'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import { MainLayout, GameLayout } from 'components/Layout'
import LoginPage from 'pages/LoginPage'
import RegistrationPage from 'pages/RegistrationPage'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import LeaderBoardPage from './pages/LeaderBoardPage'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__APP_ENV__.SERVER_PORT}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return (
    <ThemeContextProvider>
      <MainLayout>
        <Routes>
          <Route
            path={AppRoute.MAIN}
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
            element={<LeaderBoardPage />} //Страница с таблицкй очков
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
  )
}

export default App
