import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';

const endGame = () => {
  const navigate = useNavigate()

  const navigateToMain = () => {
    navigate(AppRoute.MAIN)
  }

  const navigateToGame = () => {
    navigate(AppRoute.GAME)
  }

  return (
    <section>
      <div>
        <h3>Игра завершена</h3>
        <button onClick={navigateToMain}>Вернуться в главное меню</button>
        <button onClick={navigateToGame}>Сыграть снова</button>
      </div>
    </section>
  )
}

export default endGame;