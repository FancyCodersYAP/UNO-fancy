import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { ValidationType } from 'utils/constants';
import Form from '../Form';
import { setupStore } from '../../../store/store';

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

const store = setupStore();

describe('Form', () => {
  test('should render form', () => {
    const { container } = render(
      <Provider store={store}>
        <Form {...initialProps} />
      </Provider>
    );

    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });

  test('should render title', () => {
    render(
      <Provider store={store}>
        <Form {...initialProps} title="Регистрация" />
      </Provider>
    );

    const title = screen.getByText(/регистрация/i);

    expect(title).toBeInTheDocument();
  });

  test('should NOT render title', () => {
    render(
      <Provider store={store}>
        <Form {...initialProps} />
      </Provider>
    );

    const title = screen.queryByText(/регистрация/i);

    expect(title).not.toBeInTheDocument();
  });

  test('should call handleSubmit function', async () => {
    render(
      <Provider store={store}>
        <Form {...initialProps} />
      </Provider>
    );

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
