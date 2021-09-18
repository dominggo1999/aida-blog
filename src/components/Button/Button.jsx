import React from 'react';
import { NavButton, Btn } from './Button.style';

const Button = ({
  bg,
  children,
  dark,
  primary,
  white,
  nav,
  ...props
}) => {
  const variants = { dark, primary, white };

  if(nav) {
    return (
      <NavButton
        {...props}
        {...variants}
      >
        {children}
      </NavButton>
    );
  }

  return (
    <Btn
      {...props}
      {...variants}
      bg={bg}
    >
      {children}
    </Btn>
  );
};

export default Button;
