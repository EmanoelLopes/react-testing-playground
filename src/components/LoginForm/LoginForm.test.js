import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from 'components/LoginForm';

describe('<Login />', () => {
  it('should render component properly', () => {
    render(<Login />);
    const loginForm = screen.getByTestId('login-form');

    expect(loginForm).toBeInTheDocument();
    expect(loginForm).not.toBeEmptyDOMElement();
    expect(loginForm).toBeInstanceOf(HTMLElement);
  });

  it('submit button should start disabled', () => {
    render(<Login />);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
  });

  it('should set email value', () => {
    render(<Login />);
    const email = screen.getByTestId('email-or-login');

    expect(email).toHaveValue('');

    userEvent.type(email, 'email@test.com');

    expect(email).toHaveValue('email@test.com');
  });

  it('should set password value', () => {
    render(<Login />);
    const password = screen.getByTestId('password');

    expect(password).toHaveValue('');

    userEvent.type(password, '123456abc@');

    expect(password).toHaveValue('123456abc@');
  });

  it('should set terms and conditions checkbox value', () => {
    render(<Login />);
    const terms = screen.getByTestId('terms-and-conditions');

    expect(terms).not.toBeChecked();

    userEvent.click(terms);

    expect(terms).toBeChecked();
  });

  it('submit button should be enabled if terms and conditions checkbox is checked', () => {
    render(<Login />);
    const button = screen.getByRole('button');
    const terms = screen.getByTestId('terms-and-conditions');
    
    // submit button starts disabled
    expect(button).toBeDisabled();
    
    // Check terms and conditions the enable submit button 
    userEvent.click(terms);
    
    // expect submit button to be enabled
    expect(button).not.toBeDisabled();
  });

  it('should show submit success message after submit', async () => {
    render(<Login />);

    // Check terms and conditions the enable submit button 
    userEvent.click(screen.getByTestId('terms-and-conditions'));
    // fire click event on submit button
    userEvent.click(screen.getByRole('button'));
    // wait for element to be rendered in screen
    await waitFor(() => {
      expect(screen.getByTestId('submit-success')).toBeInTheDocument();
    });
  });
});