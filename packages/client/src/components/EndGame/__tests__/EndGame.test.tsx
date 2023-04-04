import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import EndGame from '../EndGame';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const initialProps = {
  time: '1:15',
  countPlace: 2,
  points: 1150,
  result: 2500,
};

describe('EndGame', () => {
  test('should render EndGame component', () => {
    render(<EndGame {...initialProps} />);

    const image = screen.getByRole('img', { name: /медаль/i });
    const timeParagraph = screen.getByText(/время игры: 1:15/i);
    const playersParagraph = screen.getByText(/игроков/i);
    const scoreParagraph = screen.getByText(/очки/i);
    const resultParagraph = screen.getByText(/результат/i);

    const buttons = screen.getAllByRole('button');

    expect(image).toBeInTheDocument();
    expect(timeParagraph).toHaveTextContent('время игры: 1:15');
    expect(playersParagraph).toHaveTextContent('игроков: 2');
    expect(scoreParagraph).toHaveTextContent('очки: 1150');
    expect(resultParagraph).toHaveTextContent('результат: 2500-е место');

    expect(buttons).toHaveLength(2);
  });

  test('useNaigate should be called after clicking "Главное меню" button', async () => {
    jest.clearAllMocks();
    render(<EndGame {...initialProps} />);

    const mainMenuButton = screen.getByRole('button', {
      name: /главное меню/i,
    });

    await user.click(mainMenuButton);

    expect(mainMenuButton).toBeInTheDocument();

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('useNaigate should be called after clicking "Cыграть снова" button', async () => {
    jest.clearAllMocks();
    render(<EndGame {...initialProps} />);

    const playAgainButton = screen.getByRole('button', {
      name: /сыграть снова/i,
    });

    await user.click(playAgainButton);

    expect(playAgainButton).toBeInTheDocument();

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/game');
  });
});
