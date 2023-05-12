import { render, screen } from '@testing-library/react';
import LeaderBoard from '../LeaderBoard';
import { setupStore } from '../../../store/store';
import { UserService } from 'api/UserService';
import { YandexAPIRepository } from '../../../repository/YandexAPIRepository';
import { Provider } from 'react-redux';

const store = setupStore(new UserService(new YandexAPIRepository()));

// const players = [
//   {
//     id: '1',
//     name: 'Ivan',
//     score: 115,
//     time: '1:15',
//   },
//   {
//     id: '2',
//     name: 'Roman',
//     score: 318,
//     time: '2:45',
//   },
//   {
//     id: '3',
//     name: 'Ksenia',
//     score: 760,
//     time: '3:05',
//   },
// ];

// jest.mock('lodash/orderBy', () => ({
//   default: jest.fn(fn => fn),
// }));

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest
//     .fn()
//     .mockReturnValueOnce([[], jest.fn()])
//     .mockReturnValueOnce([
//       [
//         {
//           id: '1',
//           name: 'Ivan',
//           score: 115,
//           time: '1:15',
//         },
//       ],
//       jest.fn(),
//     ])
//     .mockReturnValueOnce([
//       [
//         {
//           id: '1',
//           name: 'Ivan',
//           score: 115,
//           time: '1:15',
//         },
//         {
//           id: '2',
//           name: 'Roman',
//           score: 318,
//           time: '2:45',
//         },
//         {
//           id: '3',
//           name: 'Ksenia',
//           score: 760,
//           time: '3:05',
//         },
//       ],
//       jest.fn(),
//     ]),
// }));

test('should render placeholder', () => {
  render(
    <Provider store={store}>
      <LeaderBoard />
    </Provider>
  );

  const placeholder = screen.getByText(
    /данных для рейтинга пока недостаточно/i
  );

  expect(placeholder).toBeInTheDocument();
});

// test('should render leaderboard', () => {
//   render(<LeaderBoard />);

//   const heading = screen.getByRole('heading', { name: /рейтинг игроков/i });

//   expect(heading).toBeInTheDocument();
// });

// test('should render all players', () => {
//   render(<LeaderBoard />);

//   for (const player of players) {
//     const name = screen.getByText(player.name);
//     const score = screen.getByText(player.score);
//     const time = screen.getByText(player.time);

//     expect(name).toBeInTheDocument();
//     expect(score).toBeInTheDocument();
//     expect(time).toBeInTheDocument();
//   }
// });
