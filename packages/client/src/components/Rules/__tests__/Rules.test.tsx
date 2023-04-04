import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Rules from '../Rules';
import { CARDS } from '../constants';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Rules', () => {
  test('all cards should be rendered', () => {
    render(
      <BrowserRouter>
        <Rules />
      </BrowserRouter>
    );

    for (const card of CARDS) {
      const cardText = screen.getByText(card.text);

      expect(cardText).toBeInTheDocument();
    }
  });

  test('check cards amount and attributes', () => {
    render(
      <BrowserRouter>
        <Rules />
      </BrowserRouter>
    );

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('src', CARDS[0].src);
    expect(images[1]).toHaveAttribute('src', CARDS[1].src);
    expect(images[2]).toHaveAttribute('src', CARDS[2].src);
  });

  test('link should be rendered', () => {
    render(
      <BrowserRouter>
        <Rules />
      </BrowserRouter>
    );

    const link = screen.getByRole('link', { name: /подробнее о правилах/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://inteltoys.ru/articles/cat7/article655.html'
    );
  });

  test('mockNavigate should be called', async () => {
    render(
      <BrowserRouter>
        <Rules />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /начать/i });

    await user.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/game');
  });
});
