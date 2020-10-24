import { render, screen } from '@testing-library/react';
import App from '.';

describe('<App />', () => {
  it('should render App', () => {
    render(<App />);
    const element = screen.getByText(/login page/i);
    expect(element).toBeInTheDocument();
  });
});
