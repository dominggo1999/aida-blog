/* eslint-disable import/no-unresolved */
import { animateScroll } from 'react-scroll';
import React from 'react';
import { ScrollButton } from './ScrollToTopButton.style';
import { ReactComponent as Arrow }from '../../assets/upwards-arrow.svg';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 1600,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <ScrollButton onClick={scrollToTop}>
      <Arrow />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
