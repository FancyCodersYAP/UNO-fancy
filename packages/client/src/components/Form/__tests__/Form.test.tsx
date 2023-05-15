import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ValidationType } from 'utils/constants';
import Form from '../Form';
import { renderWithProviders } from 'utils/test-utils';

const initialProps = {
  fields: [
    {
      name: 'login',
      label: 'Login',
      pattern: ValidationType.Login,
      required: true,
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      pattern: ValidationType.Email,
      required: true,
      type: 'text',
    },
  ],
  handleFormSubmit: jest.fn(),
  footer: <button type="submit">Submit</button>,
};

describe('Form', () => {
  test('should render form', () => {
    const { container } = renderWithProviders(<Form {...initialProps} />);

    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });

  test('should render title', () => {
    renderWithProviders(<Form {...initialProps} title="Регистрация" />);

    const title = screen.getByText(/регистрация/i);

    expect(title).toBeInTheDocument();
  });

  test('should NOT render title', () => {
    renderWithProviders(<Form {...initialProps} />);

    const title = screen.queryByText(/регистрация/i);

    expect(title).not.toBeInTheDocument();
  });

  test('should call handleSubmit function', async () => {
    renderWithProviders(<Form {...initialProps} />);

    const loginInput = screen.getByRole('textbox', { name: /login/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    await user.type(loginInput, 'jane');
    await user.type(emailInput, 'jane@jane.com');

    const button = screen.getByRole('button');

    expect(loginInput).toBeInTheDocument();
    expect(loginInput).toHaveValue('jane');

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue('jane@jane.com');

    await user.click(button);

    expect(initialProps.handleFormSubmit).toHaveBeenCalledTimes(1);
  });
});
