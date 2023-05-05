import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Modal from '../../Modal';

const initialProps = {
  children: <div>Children</div>,
  title: 'Modal title',
  isOpen: true,
};

const mockHandleClose = jest.fn();

describe('Modal', () => {
  test('should render component', () => {
    render(
      <Modal
        {...initialProps}
        handleCloseModal={mockHandleClose}
        hasCrossButton={true}
      />
    );

    const title = screen.getByRole('heading', { name: /modal title/i });
    const closeButton = screen.getByRole('button', { name: /close/i });
    const buttonIcon = screen.getByTestId('close icon');

    expect(title).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
  });

  test('should NOT render close button and title', () => {
    render(<Modal {...initialProps} title="" hasCrossButton={false} />);

    const closeButton = screen.queryByRole('button', { name: /close/i });
    const title = screen.queryByRole('heading');

    expect(closeButton).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
  });

  test('handleCloseModal should be called', async () => {
    render(
      <Modal
        {...initialProps}
        handleCloseModal={mockHandleClose}
        hasCrossButton={true}
        data-testid="modal"
      />
    );

    const closeButton = screen.getByRole('button', { name: /close/i });

    await user.click(closeButton);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
