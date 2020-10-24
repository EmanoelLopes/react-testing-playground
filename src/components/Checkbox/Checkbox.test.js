import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from 'components/Checkbox';

describe('<Checkbox />', () => {
  const checkboxtProps = {
    value: false,
    checked: false,
    onChange: () => null,
    id: 'checkbox',
  };

  it('should render a simple Checkbox with it props', () => {
    render(<Checkbox {...checkboxtProps} />);
    expect(screen.getByLabelText(/check/i)).toBeInTheDocument();
  });

  it('should call a function after onChange event', () => {
    const mockFn = jest.fn();
    render(<Checkbox {...checkboxtProps} onChange={mockFn} />);

    userEvent.click(screen.getByLabelText('Check'));
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByLabelText('Check'));
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});