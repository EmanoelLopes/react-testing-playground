import React from 'react';
import { string, bool, func } from 'prop-types';

const Button = ({ className, type, disabled, onClick, text }) => {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
};

Button.defaultProps = {
  className: '',
  type: '',
  disabled: false,
};

Button.propTypes = {
  className: string,
  type: string,
  disabled: bool,
  onClick: func.isRequired,
  text: string.isRequired,
};

export default Button;