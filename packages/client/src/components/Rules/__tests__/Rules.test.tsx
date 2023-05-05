import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Rules from '../Rules';
import { cardsWithRules } from 'data/cardsWithRules';

describe('Rules', () => {
  test('all cards should be rendered', () => {
    render(
      <BrowserRouter>
        <Rules />
      </BrowserRouter>
    );

    const cards = screen.getAllByTestId('card');

    expect(cards).toHaveLength(3);
  });

  test('check cards amount and attributes', () => {
    render(
      <BrowserRouter>
        <Rules />
      </BrowserRouter>
    );

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('src', cardsWithRules[0].src);
    expect(images[1]).toHaveAttribute('src', cardsWithRules[1].src);
    expect(images[2]).toHaveAttribute('src', cardsWithRules[2].src);
  });

  test('button should be rendered', () => {
    render(
      <BrowserRouter>
        <Rules />
      </BrowserRouter>
    );

    const buttonNext = screen.getByRole('button', { name: /подробнее/i });
    const buttonPrev = screen.getByRole('button', { name: /назад/i });

    expect(buttonNext).toBeInTheDocument();
    expect(buttonPrev).toBeInTheDocument();
  });
});
