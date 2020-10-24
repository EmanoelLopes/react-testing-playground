import React from 'react';
import { string, bool, func } from 'prop-types';

const Checkbox = ({ value, id, onChange, checked }) => {
  return (
    <input
      id={id}
      type="checkbox"
      aria-label="Check"
      value={value}
      checked={checked}
      data-testid={id}
      onChange={onChange}
    />
  )
};

Checkbox.defaultProps = {
  value: false,
  checked: false,
  id: '',
};

Checkbox.propTypes = {
  value: bool,
  checked: bool,
  id: string,
  onChange: func.isRequired,
};

export default Checkbox;