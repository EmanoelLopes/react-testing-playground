import { render, screen } from '@testing-library/react';
import Login from 'components/LoginForm';

describe('<Login />', () => {
  it('should render component properly', () => {
    render(<Login />);
    const loginForm = screen.getByTestId('login-form');

    expect(loginForm).not.toBeEmptyDOMElement();
    expect(loginForm).toBeInstanceOf(HTMLElement);
  });
});