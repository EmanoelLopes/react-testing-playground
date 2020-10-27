import { render, screen } from '@testing-library/react';
import App from '.';

describe('<App />', () => {
  it('should render "App" component', () => {
    render(<App />);
    const app = screen.getByTestId('App');

    expect(app).toBeInTheDocument();
  });
});
