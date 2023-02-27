import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';

const endGame = () => {
  const navigate = useNavigate()

  const navigateToGame = () => {
    navigate(AppRoute.GAME)
  }

  return (
    <section>
      <div>
        <h3>Правила игры:</h3>
        <div>
          <div>
            <img src="" alt="" width="90px" height="90px" />
          </div>
          <div>
            <img src="" alt="" width="90px" height="90px" />
          </div>
          <div>
            <img src="" alt="" width="90px" height="90px" />
          </div>
        </div>
        <a href="https://inteltoys.ru/articles/cat7/article655.html">Подробнее о правилах</a>
        <button onClick={navigateToGame}>Начать</button>
      </div>
    </section>
  )
}

export default endGame;