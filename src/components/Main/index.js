import React from 'react';
import { node } from 'prop-types';

const Main = ({ children }) => <main data-testid="main">{children}</main>;

Main.defaultProps = {
  children: `<div />`,
};

Main.propTypes = {
  children: node,
};

export default Main;