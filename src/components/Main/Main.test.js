import { render, screen } from '@testing-library/react';
import Main from 'components/Main';

describe('<Main />', () => {
  it('should render component properly', () => {
    render(<Main />);
    const main = screen.getByTestId('main');

    expect(main).not.toBeEmptyDOMElement();
    expect(main).toBeInstanceOf(HTMLElement);
  });

  it('should render component children properly', () => {
    render(
      <Main>
        <div>Main children</div>
      </Main>
    );
    const main = screen.getByTestId('main');

    expect(main).not.toContainHTML(`<header>Main children</header>`);
    expect(main).toContainHTML(`<div>Main children</div>`);
  });
});