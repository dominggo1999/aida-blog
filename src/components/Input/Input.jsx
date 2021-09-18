import React from 'react';
import { Field } from './Input.style';

const Input = ({ children }) => {
  return (
    <Field>
      {children}
    </Field>
  );
};

export default Input;
