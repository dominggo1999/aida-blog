import React from 'react';
import { TitleWrapper, TitleText } from './SidebarTitle.style';

const SidebarTitle = ({ title }) => {
  return (
    <TitleWrapper>
      <TitleText>
        {title}
      </TitleText>
    </TitleWrapper>
  );
};

export default SidebarTitle;
