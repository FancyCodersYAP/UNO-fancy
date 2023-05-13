import { render, screen } from '@testing-library/react';
import Input from '../Input';

const initialProps = {
  name: 'Login',
  label: 'Login',
  required: true,
  register: jest.fn(),
};

describe('Input', () => {
  test('should render component', () => {
    render(<Input {...initialProps} />);

    const input = screen.getByRole('textbox', { name: /login/i });
    const label = screen.getByText(/login/i);

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  test('register should be called', () => {
    render(<Input {...initialProps} />);

    expect(initialProps.register).toHaveBeenCalledWith('Login', {
      required: 'Поле не может быть пустым',
    });
  });

  test('error should be rendered', () => {
    render(
      <Input {...initialProps} error errorMessage="Some error happened" />
    );

    const error = screen.getByText(/some error happened/i);

    expect(error).toBeInTheDocument();
  });
});
