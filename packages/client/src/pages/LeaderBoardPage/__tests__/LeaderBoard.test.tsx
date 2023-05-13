import { screen } from '@testing-library/react';
import LeaderBoard from '../LeaderBoard';
import { renderWithProviders } from 'utils/test-utils';

const players = [
  {
    data: {
      game_id: 112568,
      username: 'Player1',
      avatar: undefined,
      score: 16,
      wins_2: 3,
      wins_4: 4,
      total_wins: 7,
    },
  },
  {
    data: {
      game_id: 285398,
      username: 'Player2',
      avatar:
        '/0017fa8c-2b6f-4f70-9c94-11a70362be4c/c57d9e3d-33d2-41de-b529-9c52c55852c8_icons8-фламинго-96.png',
      score: 70,
      wins_2: 6,
      wins_4: 5,
      total_wins: 11,
    },
  },
];

test('should render placeholder', async () => {
  renderWithProviders(<LeaderBoard />);

  const placeholder = screen.getByText(
    /данных для рейтинга пока недостаточно/i
  );

  expect(placeholder).toBeInTheDocument();
});

test('should render leaderboard', () => {
  renderWithProviders(<LeaderBoard />, {
    preloadedState: {
      LEADERBOARD: { leaderList: players, isLoading: false, error: '' },
    },
  });

  const heading = screen.getByRole('heading', { name: /рейтинг игроков/i });

  expect(heading).toBeInTheDocument();
});

test('should render all players', () => {
  renderWithProviders(<LeaderBoard />, {
    preloadedState: {
      LEADERBOARD: { leaderList: players, isLoading: false, error: '' },
    },
  });

  for (const player of players) {
    const name = screen.getByText(player.data.username);
    const score = screen.getByText(player.data.score);
    const wins2 = screen.getByText(player.data.wins_2);
    const wins4 = screen.getByText(player.data.wins_4);

    expect(name).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(wins2).toBeInTheDocument();
    expect(wins4).toBeInTheDocument();
  }
});
