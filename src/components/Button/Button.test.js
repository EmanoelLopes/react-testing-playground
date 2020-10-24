import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from 'components/Button';

describe('<Button />', () => {
  const buttonProps = {
    className: 'btn-primary',
    type: '',
    disabled: false,
    onClick: () => null,
    text: 'Click me!',
  };

  it('should render a simple button with it props', () => {
    render(<Button {...buttonProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should set props disabled to enabled', () => {
    const { rerender } = render(<Button {...buttonProps} disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();

    rerender(<Button {...buttonProps} disabled={false} />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });


  it('should call a function after click event', () => {
    const mockFn = jest.fn();
    
    render(<Button {...buttonProps} onClick={mockFn} />);
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});