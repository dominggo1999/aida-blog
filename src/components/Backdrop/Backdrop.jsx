import React, { useState, useEffect } from 'react';
import { Overlay } from './Backdrop.style';

const Backdrop = ({ children, open, handleClose }) => {
  if(!open)return null;

  return (
    <Overlay
      onClick={handleClose}
      open={open}
    >
      {children}
    </Overlay>
  );
};

export default Backdrop;
