import React from 'react';
import Container from '../Wrapper/Container';
import { HeaderWrapper, HeaderTitle } from './SectionHeader.style';

const SectionHeader = ({ children }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        {children}
      </HeaderTitle>
    </HeaderWrapper>
  );
};

export default SectionHeader;
