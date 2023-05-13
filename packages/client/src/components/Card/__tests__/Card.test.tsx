import { render, screen } from '@testing-library/react';
import Card from '../Card';

const initialProps = {
  src: '/src',
  alt: 'card alt',
  text: 'card text',
};

describe('Card', () => {
  test('should render card', () => {
    render(<Card {...initialProps} />);

    const image = screen.getByRole('img', { name: /card alt/i });
    const text = screen.getByText(/card text/i);

    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
