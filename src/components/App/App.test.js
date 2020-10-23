import { render, screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/login page/i);
  expect(element).toBeInTheDocument();
});
