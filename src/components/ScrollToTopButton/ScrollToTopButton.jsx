import { animateScroll } from 'react-scroll';
import { ScrollButton } from './ScrollToTopButton.style';
import { ReactComponent as UpArrow } from '../../assets/upwards-arrow.svg';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 1600,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <ScrollButton onClick={scrollToTop}>
      <UpArrow />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
