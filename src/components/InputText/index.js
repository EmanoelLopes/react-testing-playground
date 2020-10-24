import React from 'react';
import { string, func } from 'prop-types'

const InputText = ({
  type,
  value,
  onChange,
  label,
  placeholder,
  id,
}) => {
  return (
    <input
      type={type}
      value={value}
      aria-label={label}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={id}
    />
  )
};

InputText.defaultProps = {
  type: 'text',
  value: '',
  label: '',
  placeholder: '',
};

InputText.propTypes = {
  type: string,
  value: string,
  label: string,
  onChange: func.isRequired,
  placeholder: string,
  id: string.isRequired,
};

export default InputText;

