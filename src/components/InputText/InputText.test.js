import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputText from 'components/InputText';

describe('<InputText />', () => {
  const inputTextProps = {
    type: 'text',
    value: '',
    label: '',
    onChange: () => null,
    placeholder: '',
    id: '',
  };

  it('should render a simple inputText with it props', () => {
    render(<InputText {...inputTextProps} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render a input with the password type', () => {
    render(
      <InputText
        {...inputTextProps}
        type={`password`}
        label={`password`}
      />);

    expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');
  });

  it('should call a function after onChange event', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<InputText {...inputTextProps} onChange={mockFn} />);
    
    const inputText = getByRole('textbox');
    userEvent.type(inputText, 'some value');

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes('some value'.length);
  });
});