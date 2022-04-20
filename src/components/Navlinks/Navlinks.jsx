import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import {
  NavlinksFlex,
  NavlinksWrapper,
  NavItemLeft,
  MenuButton,
} from './Navlink.style';
import navlinks from '../../constants/navlinks';
import Button from '../Button/Button';
import { scrollToTop } from '../../util/scrollToTop';

const Navlinks = ({ openSideNavbar }) => {
  const scrollToNewsletterForm = () => {
    scroller.scrollTo('newsletter-form', {
      duration: 1600,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <>
      <MenuButton>
        <Button
          nav
          onClick={openSideNavbar}
        >
          Menu
        </Button>
      </MenuButton>
      <NavlinksFlex>
        <NavlinksWrapper>
          {
            navlinks.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={scrollToTop}
              >
                <NavItemLeft>{item.name}</NavItemLeft>
              </Link>
            ))
          }
        </NavlinksWrapper>
        <NavlinksWrapper>
          <Button
            nav
            onClick={scrollToNewsletterForm}
          >
            Subscribe
          </Button>
        </NavlinksWrapper>
      </NavlinksFlex>
    </>
  );
};

export default Navlinks;
